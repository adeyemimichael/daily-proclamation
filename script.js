
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
    
  ];

  // Check if all quotes have been displayed
  if (bibleQuotes.length === 0) {
    proclamationDisplay.innerHTML = "<p>No more quotes available. Refresh for new quotes!</p>";
    return;
  }

  // Get a random index from the remaining quotes
  const randomIndex = Math.floor(Math.random() * bibleQuotes.length);
  const randomQuote = bibleQuotes[randomIndex];

  // Display the quote
  proclamationDisplay.innerHTML = `<p>Hello, ${userName}! Your daily proclamation is: <br>"${randomQuote}"</p>`;

  // Remove the displayed quote from the array
  bibleQuotes.splice(randomIndex, 1);
}
