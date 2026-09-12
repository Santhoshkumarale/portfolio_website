import { CodeLanguage } from '../data/portfolio.models';

export type TokenType =
  'plain' | 'keyword' | 'type' | 'string' | 'comment' | 'number' | 'attribute' | 'variable';

export interface Token {
  type: TokenType;
  text: string;
}

const CSHARP_KEYWORDS = new Set([
  'public',
  'private',
  'protected',
  'internal',
  'sealed',
  'static',
  'readonly',
  'const',
  'class',
  'interface',
  'record',
  'struct',
  'enum',
  'namespace',
  'using',
  'var',
  'new',
  'return',
  'if',
  'else',
  'for',
  'foreach',
  'while',
  'in',
  'is',
  'as',
  'null',
  'true',
  'false',
  'this',
  'base',
  'void',
  'async',
  'await',
  'throw',
  'try',
  'catch',
  'finally',
  'string',
  'int',
  'byte',
  'bool',
  'long',
  'double',
  'decimal',
  'object',
  'override',
  'virtual',
  'abstract',
  'get',
  'set',
  'init',
  'params',
  'out',
  'ref',
]);

const SQL_KEYWORDS = new Set([
  'SELECT',
  'FROM',
  'WHERE',
  'JOIN',
  'LEFT',
  'RIGHT',
  'INNER',
  'OUTER',
  'ON',
  'AND',
  'OR',
  'NOT',
  'NULL',
  'IS',
  'AS',
  'WITH',
  'GROUP',
  'BY',
  'ORDER',
  'HAVING',
  'COUNT',
  'SUM',
  'FILTER',
  'DESC',
  'ASC',
  'INSERT',
  'INTO',
  'VALUES',
  'UPDATE',
  'SET',
  'DELETE',
  'CREATE',
  'ALTER',
  'PROCEDURE',
  'FUNCTION',
  'VIEW',
  'BEGIN',
  'END',
  'TRANSACTION',
  'COMMIT',
  'ROLLBACK',
  'DECLARE',
  'RETURN',
  'RETURNS',
  'INTERVAL',
  'CURRENT_DATE',
  'NOCOUNT',
  'INT',
  'DATE',
  'NVARCHAR',
  'VARCHAR',
  'BIGINT',
  'TEXT',
  'BOOLEAN',
  'TIMESTAMP',
  'SYSUTCDATETIME',
  'CASE',
  'WHEN',
  'THEN',
  'ELSE',
  'DISTINCT',
  'EXISTS',
  'IN',
  'LIMIT',
  'OFFSET',
  'UNION',
  'ALL',
  'PRIMARY',
  'KEY',
  'FOREIGN',
  'REFERENCES',
  'INDEX',
  'TABLE',
]);

const PATTERNS: Record<
  CodeLanguage,
  { regex: RegExp; classify: (m: RegExpExecArray) => TokenType }
> = {
  csharp: {
    regex:
      /(\/\/[^\n]*)|("(?:[^"\\\n]|\\.)*")|(\b\d+(?:\.\d+)?\b)|(\[[A-Za-z_][\w.]*(?:\([^)]*\))?\])|(\b[A-Za-z_]\w*\b)/g,
    classify: (m) => {
      if (m[1]) return 'comment';
      if (m[2]) return 'string';
      if (m[3]) return 'number';
      if (m[4]) return 'attribute';
      const word = m[5];
      if (CSHARP_KEYWORDS.has(word)) return 'keyword';
      if (word.startsWith('_')) return 'variable';
      if (/^[A-Z]/.test(word)) return 'type';
      return 'plain';
    },
  },
  sql: {
    regex: /(--[^\n]*)|('(?:[^'\\\n]|\\.)*')|(\b\d+(?:\.\d+)?\b)|(@\w+)|(\b[A-Za-z_]\w*\b)/g,
    classify: (m) => {
      if (m[1]) return 'comment';
      if (m[2]) return 'string';
      if (m[3]) return 'number';
      if (m[4]) return 'variable';
      const word = m[5];
      if (SQL_KEYWORDS.has(word.toUpperCase()) && word === word.toUpperCase()) return 'keyword';
      return 'plain';
    },
  },
};

/**
 * Splits source code into typed tokens for safe, dependency-free highlighting.
 * Adjacent plain tokens are merged to keep the DOM small.
 */
export function tokenize(code: string, language: CodeLanguage): Token[] {
  const { regex, classify } = PATTERNS[language];
  const tokens: Token[] = [];
  let last = 0;

  const push = (type: TokenType, text: string) => {
    if (!text) return;
    const prev = tokens[tokens.length - 1];
    if (prev && prev.type === 'plain' && type === 'plain') {
      prev.text += text;
    } else {
      tokens.push({ type, text });
    }
  };

  regex.lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(code)) !== null) {
    push('plain', code.slice(last, match.index));
    push(classify(match), match[0]);
    last = match.index + match[0].length;
  }
  push('plain', code.slice(last));

  return tokens;
}
