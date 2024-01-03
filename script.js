function generateProclamation() {
  const userName = document.getElementById('userName').value;
  const proclamationDisplay = document.getElementById('proclamationDisplay');

  // Array of Bible quotes (you can replace these with actual quotes)
  const bibleQuotes = [
    "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope. - Jeremiah 29:11",
    "The Lord is my shepherd; I shall not want. - Psalm 23:1",
    "Trust in the Lord with all your heart, and do not lean on your own understanding. - Proverbs 3:5",
    "Let everything that has breath praise the Lord! Praise the Lord! - Psalm 150:6",
    "May the Lord bless you and keep you. - Numbers 6:24",
"Blessed are the peacemakers, for they shall be called sons of God. - Matthew 5:9",
"Blessed is the man who walks not in the counsel of the wicked, nor stands in the way of sinners, nor sits in the seat of scoffers. - Psalm 1:1",
 "Blessed be the God and Father of our Lord Jesus Christ, who has blessed us in Christ with every spiritual blessing in the heavenly places. - Ephesians 1:3",
 " I am blessed beyond measures",
 "With God on my side i will make it big enough",
 "No doubt i am moving with strength",
  ];

  

  // Get a random number between 0 and 364 (for array indexing)
  const randomIndex = Math.floor(Math.random() * 10);

  const randomQuote = bibleQuotes[randomIndex];
  
  // Display the proclamation
  proclamationDisplay.innerHTML = `<p>Hello, ${userName}! Your daily proclamation is: <br>"${randomQuote}"</p>`;
}
