function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  rna = dna.replaceAll("T", "U");
  return rna;
}
