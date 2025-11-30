/**
 * Funções para calcular complexidade computacional de algoritmos clássicos vs quânticos
 */

// FATORAÇÃO RSA (GNFS vs Shor)

export function calculateGNFSComplexity(L) {
  const c = 1.9;
  const exponent = c * Math.pow(L, 1 / 3) * Math.pow(Math.log(L), 2 / 3);
  return Math.exp(exponent);
}

export function calculateShorComplexity(L) {
  return Math.pow(L, 3);
}

// BUSCA EM BANCO DE DADOS (Busca Linear vs Grover)

export function calculateClassicalSearchComplexity(N) {
  return N;
}

export function calculateGroverComplexity(N) {
  return Math.sqrt(N);
}

// FUNÇÕES AUXILIARES

export function formatScientific(value) {
  if (value === 0) return "0";
  if (!isFinite(value)) return "∞";

  const exponent = Math.floor(Math.log10(Math.abs(value)));
  const mantissa = value / Math.pow(10, exponent);

  return `${mantissa.toFixed(2)} × 10^${exponent}`;
}

export function estimateTimeInYears(operations) {
  const opsPerSecond = 1e9;
  const seconds = operations / opsPerSecond;
  const years = seconds / (365.25 * 24 * 3600);
  return years;
}