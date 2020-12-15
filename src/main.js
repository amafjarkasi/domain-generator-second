let pronoun = ["the", "our", "best"];
let adj = ["great", "big", "amazing", "funny", "sleepy"];
let noun = ["jogger", "racoon", "mother"];
let tld = [".com", ".net", ".org", ".us", ".biz", ".co"];

for (
  var pronoun_counter = 0;
  pronoun_counter < pronoun.length;
  pronoun_counter++
) {
  for (var adj_counter = 0; adj_counter < adj.length; adj_counter++) {
    for (var noun_counter = 0; noun_counter < noun.length; noun_counter++) {
      for (var tld_counter = 0; tld_counter < tld.length; tld_counter++) {
        console.log(
          pronoun[pronoun_counter] +
            adj[adj_counter] +
            noun[noun_counter] +
            tld[tld_counter]
        );
      }
    }
  }
}
