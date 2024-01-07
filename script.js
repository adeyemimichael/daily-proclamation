
// function generateProclamation() {
//   const userName = document.getElementById('userName').value;
//   const proclamationDisplay = document.getElementById('proclamationDisplay');

//   // Array of Bible quotes (you can replace these with actual quotes)
 

//   // Displayed quotes tracker
//   let displayedQuotes = [];

//   // Check if all quotes have been displayed
//   if (bibleQuotes.length === 0) {
//     proclamationDisplay.innerHTML = "<p>No more quotes available. Refresh for new quotes!</p>";
//     return;
//   }

//   // If all quotes have been displayed, reset the array and tracker
//   if (displayedQuotes.length === bibleQuotes.length) {
//     displayedQuotes = [];
//     bibleQuotes = [...originalBibleQuotes]; // Restore the original array
//   }

//   // Get a random index from the remaining quotes
//   const randomIndex = Math.floor(Math.random() * bibleQuotes.length);
//   const randomQuote = bibleQuotes[randomIndex];

//   // Display the quote
//   proclamationDisplay.innerHTML = `<p>Hello, ${userName}! Your daily proclamation is: <br>"${randomQuote}"</p>`;

//   // Remove the displayed quote from the array and add it to the displayed tracker
//   displayedQuotes.push(bibleQuotes.splice(randomIndex, 2)[1]);
// }

function generateProclamation() {
  const userName = document.getElementById('userName').value;
  const proclamationDisplay = document.getElementById('proclamationDisplay');
  let bibleQuotes = [
   
"For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope. - Jeremiah 29:11",

"The Lord is my shepherd; I shall not want. - Psalm 23:1",

"Trust in the Lord with all your heart, and do not lean on your own understanding. - Proverbs 3:5",

"Let everything that has breath praise the Lord! Praise the Lord! - Psalm 150:6",

"May the Lord bless you and keep you. - Numbers 6:24",

"Blessed are the peacemakers, for they shall be called sons of God. - Matthew 5:9",

"Blessed is the man who walks not in the counsel of the wicked, nor stands in the way of sinners, nor sits in the seat of scoffers. - Psalm 1:1",

 "Blessed be the God and Father of our Lord Jesus Christ, who has blessed us in Christ with every spiritual blessing in the heavenly places. - Ephesians 1:3",

 "I am blessed beyond measures",

 "As I awaken to a new day, I embrace the light of God's love shining upon me. I am grateful for the grace that sustains me and the mercies that are new every morning.",
 
 "I declare my faith in God, trusting His plans for me. My steps are guided by His wisdom, and His Word is a lamp unto my feet, illuminating my path.",
 
 "I am a vessel of God's love and compassion. I seek to reflect His grace and kindness in all my interactions, spreading His light wherever I go.",
 
 "Today, I surrender my will to God's divine purpose for my life. I am His instrument, ready to fulfill His plans and glorify His name through my actions.",
 
 "I am empowered by the Holy Spirit, equipped to overcome challenges and embrace opportunities that align with God's will.",
 
 "I commit to nurturing my relationship with God through prayer, studying His Word, and living with integrity and righteousness.",
 
 "I stand firm in God's promises, knowing that with Him, all things are possible. His strength sustains me, and His peace guards my heart.",
 
 "Today, I walk in faith, anchored by God's unwavering love. I live each moment to honor Him and serve others with humility and grace.",
 
 "May my life be a testament to His goodness and may His light shine brightly through me, touching the lives of those around me.",
 
 "Today, I embrace the abundance that life offers. My wealth is found in gratitude, compassion, and the experiences that enrich my soul.",


 
 'I am destined for greatness, and each step I take leads me closer to realizing my dreams. I approach challenges with courage, knowing they are opportunities for growth.',

 'Discipline is my guiding force. I commit to the daily habits and actions that propel me toward my goals. I honor my commitments and persevere, even when faced with adversity.',

'In my relationships, I offer love, kindness, and understanding. I cultivate connections that nourish my spirit and lift others higher.',

'I am a beacon of positivity and light. My words and actions inspire those around me, and I embrace each day with a heart full of purpose and dedication.',

'Today, I choose to live authentically, to chase my ambitions with fervor, and to foster meaningful connections. I am ready to embrace the challenges and joys that come my way.',

'This day is a canvas, and I hold the brush. With determination and grace, I paint a masterpiece of fulfillment and success.',

"But grow in the grace and knowledge of our Lord and Savior Jesus Christ. - 2 Peter 3:18",

"So then, just as you received Christ Jesus as Lord, continue to live your lives in him. - Colossians 2:6",

"Like newborn babies, crave pure spiritual milk, so that by it you may grow up in your salvation. - 1 Peter 2:2",

"For we are God’s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do. - Ephesians 2:10",

"But seek first his kingdom and his righteousness, and all these things will be given to you as well.- Matthew 6:33",

"Today, I seek wisdom as the cornerstone of my journey. I embrace the fear of the Lord as the foundation of true understanding. I ask God for wisdom, knowing He generously bestows it upon me without judgment.",

"I commit to pursuing wisdom and understanding, holding steadfast to God's teachings and never turning away from His words. I recognize the value of seeking counsel and listening to advice, for wisdom springs from openness to guidance.",
"I declare that my words reflect righteousness and life, nurturing and uplifting those around me. I shun the ways of folly and embrace the wisdom that flows from a heart devoted to God's teachings.",
"I DECLARE God’s incredible blessings over my life. I will see an explosion of God’s goodness, a sudden widespread increase. I will experience the surpassing greatness of God’s favor. It will elevate me to a level higher than I ever dreamed of. Explosive blessings are coming my way. This is my declaration.",
"I DECLARE I will experience God’s faithfulness. I will not worry. I will not doubt. I will keep my trust in Him, knowing that He will not fail me. I will give birth to every promise God put in my heart and I will become everything God created me to be. This is my declaration.",
"I DECLARE I have the grace I need for today. I am full of power, strength, and determination. Nothing I face will be too much for me. I will overcome every obstacle, outlast every challenge, and come through every difficulty better off than I was before. This is my declaration.",
"I DECLARE it is not too late to accomplish everything God has placed in my heart. I have not missed my window of opportunity. God has moments of favor in my future. He is preparing me right now because He is about to release a special grace to help me accomplish that dream. This is my time. This is my moment. I receive it today! This is my declaration.",
"I DECLARE I am grateful for who God is in my life and for what He’s done. I will not take for granted the people, the opportunities, and the favor He has blessed me with. I will look at what is right and not what is wrong. I will thank Him for what I have and not complain about what I don’t have. I will see each day as a gift from God. My heart will overflow with praise and gratitude for all of His goodness. This is my declaration.",
" I DECLARE a legacy of faith over my life. I declare that I will store up blessings for future generations. My life is marked by excellence and integrity. Because I’m making right choices and taking steps of faith, others will want to follow me. God’s abundance is surrounding my life today. This is my declaration.",
"I DECLARE that God has a great plan for my life. He is directing my steps. And even though I may not always understand how, I know my situation is not a surprise to God. He will work out every detail to my advantage. In His perfect timing, everything will turn out right. This is my declaration.",
"I DECLARE God’s dream for my life is coming to pass. It will not be stopped by people, disappointments, or adversities. God has solutions to every problem I will ever face already lined up. The right people and the right breaks are in my future. I will fulfill my destiny. This is my declaration.",
"I DECLARE I will put actions behind my faith. I will not be passive or indifferent. I will demonstrate my faith by taking bold steps to move toward what God has put in my heart. My faith will not be hidden; it will be seen. I know when God sees my faith, He will show up and do amazing things. This is my declaration." ,
" I DECLARE there is an anointing of ease on my life. God is going before me making crooked places straight. His yoke is easy and His burden is light. I will not continually struggle. What used to be difficult will not be difficult anymore. God’s favor and blessing on my life is lightening the load and taking the pressure off.",
"I DECLARE breakthroughs are coming in my life, sudden bursts of God’s goodness. Not a trickle. Not a stream. But a flood of God’s power. A flood of healing. A flood of wisdom. A flood of favor. I am a breakthrough person and I choose to live breakthrough minded. I am expecting God to overwhelm me with His goodness and amaze me with His favor. This is my declaration.",
  ];

  // Get displayed quotes from localStorage or initialize an empty array
  let displayedQuotes = JSON.parse(localStorage.getItem('displayedQuotes')) || [];

  // // Check if all quotes have been displayed
  // if (displayedQuotes.length === bibleQuotes.length) {
  //   proclamationDisplay.innerHTML = "<p>No more quotes available. Refresh for new quotes!</p>";
  //   return;
  // }

  // Get a random index from the remaining quotes
  let randomIndex;
  let randomQuote;

  do {
    randomIndex = Math.floor(Math.random() * bibleQuotes.length);
    randomQuote = bibleQuotes[randomIndex];
  } while (displayedQuotes.includes(randomQuote)); // Ensure the quote hasn't been displayed

  // Display the quote
  proclamationDisplay.innerHTML = `<p>Hello, ${userName}! Your daily proclamation is: <br>"${randomQuote}"</p>`;

  // Add the displayed quote to the tracker
  displayedQuotes.push(randomQuote);
  localStorage.setItem('displayedQuotes', JSON.stringify(displayedQuotes));
}
