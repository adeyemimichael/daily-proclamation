
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
    
"I DECLARE God’s incredible blessings over my life. I will see an explosion of God’s goodness, a sudden widespread increase. I will experience the surpassing greatness of God’s favor. It will elevate me to a level higher than I ever dreamed of. Explosive blessings are coming my way.",
"I DECLARE I will experience God’s faithfulness. I will not worry. I will not doubt. I will keep my trust in Him, knowing that He will not fail me. I will give birth to every promise God put in my heart and I will become everything God created me to be." ,
"I DECLARE I have the grace I need for today. I am full of power, strength, and determination. Nothing I face will be too much for me. I will overcome every obstacle, outlast every challenge, and come through every difficulty better off than I was before." ,
"I DECLARE it is not too late to accomplish everything God has placed in my heart. I have not missed my window of opportunity. God has moments of favor in my future. He is preparing me right now because He is about to release a special grace to help me accomplish that dream. This is my time. This is my moment. I receive it today!" ,

"I DECLARE I am grateful for who God is in my life and for what He’s done. I will not take for granted the people, the opportunities, and the favor He has blessed me with. I will look at what is right and not what is wrong. I will thank Him for what I have and not complain about what I don’t have. I will see each day as a gift from God. My heart will overflow with praise and gratitude for all of His goodness." ,

"I DECLARE a legacy of faith over my life. I declare that I will store up blessings for future generations. My life is marked by excellence and integrity. Because I’m making right choices and taking steps of faith, others will want to follow me. God’s abundance is surrounding my life today." ,



"I DECLARE that God has a great plan for my life. He is directing my steps. And even though I may not always understand how, I know my situation is not a surprise to God. He will work out every detail to my advantage. In His perfect timing, everything will turn out right." ,

"I DECLARE God’s dream for my life is coming to pass. It will not be stopped by people, disappointments, or adversities. God has solutions to every problem I will ever face already lined up. The right people and the right breaks are in my future. I will fulfill my destiny." ,


"I DECLARE unexpected blessings are coming my way. I will move forward from barely making it to having more than enough. God will open up supernatural doors for me. He will speak to the right people about me. I will see Ephesians 3:20 exceedingly, abundantly, above-and-beyond favor and increase in my life.",

"I DECLARE that God will accelerate His plan for my life as I put my trust in Him. I will accomplish my dreams faster than I thought possible. It will not take years to overcome obstacles, to get out of debt, or to meet the right person. God is doing things faster than before. He will give me victory sooner than I think. He has blessings that will thrust me years ahead.",

 "I DECLARE Ephesians 3:20 over my life. God will do exceedingly, abundantly above all that I ask or think. Because I honor Him, His blessings will chase me down and overtake me. I will be in the right place at the right time. People will go out of their way to be good to me. I am surrounded by God’s grace.",
"I DECLARE I am special and extraordinary. I am not average! I have been custom-made. I am one of a kind. Of all the things God created, what He is most proud of is me. I am his masterpiece, His most prized possession. I will keep my head held high, knowing I am a child of the most high God, made in His very image.",
"I DECLARE that God is bringing about new seasons of growth. I will not get stagnant and hold on to the old. I will be open to change knowing that God has something better in front of me. New doors of opportunity, new relationships, and new levels of favor are in my future.", 

"I DECLARE that I will use my words to bless people. I will speak favor and victory over my family, friends, and loved ones. I will help call out their seeds of greatness by telling them “I’m proud of you. I love you. You are amazing. You are talented. You are beautiful. You will do great things in life",
"I DECLARE that I have a sound mind filled with good thoughts, not thoughts of defeat. By faith, I am well able. I am anointed. I am equipped. I am empowered. My thoughts are guided by God’s Word, every day. No obstacle can defeat me because my mind is programmed for victory.",
"I DECLARE that I will be a leader. I will be a leader because I am a leader. I will be a leader because I am a leader",
"I DECLARE that I will live as a healer. I am sensitive to the needs of those around me. I will lift the fallen, restore the broken, and encourage the discouraged, I am full of compassion and kindness. I won’t just look for a miracle. I will become someone’s miracle by showing God’s love and mercy everywhere I go.",

"I DECLARE I will put actions behind my faith. I will not be passive or indifferent. I will demonstrate my faith by taking bold steps to move toward what God has put in my heart. My faith will not be hidden; it will be seen. I know when God sees my faith, He will show up and do amazing things. ",

"I DECLARE breakthroughs are coming in my life, sudden bursts of God’s goodness. Not a trickle. Not a stream. But a flood of God’s power. A flood of healing. A flood of wisdom. A flood of favor. I am a breakthrough person and I choose to live breakthrough minded. I am expecting God to overwhelm me with His goodness and amaze me with His favor.",
 "I DECLARE there is an anointing of ease on my life. God is going before me making crooked places straight. His yoke is easy and His burden is light. I will not continually struggle. What used to be difficult will not be difficult anymore. God’s favor and blessing on my life is lightening the load and taking the pressure off.",
 "I DECLARE that I am calm and peaceful. I will not let people or circumstances upset me. I will rise above every difficulty, knowing that God has given me the power to remain calm. I choose to live my life happy, bloom where I am planted, and let God fight my battles.",
 "I DECLARE God’s supernatural favor over my life. What I could not make happen on my own, God will make happen for me. Supernatural opportunities, healing, restoration, and breakthroughs are coming my way. I am getting stronger, healthier, and wiser. I will discover talent that I didn’t know I had and I will accomplish my God-given dream.",
 "I DECLARE I will live victoriously. I was created in the image of God. I have the DNA of a winner. I am wearing a crown of favor. Royal blood flows through my veins. I am the head, never the tail, above never beneath. I will live with purpose, passion, and praise, knowing that I was destined to live in victory.",
"I DECLARE I am a people builder. I will look for opportunities to encourage others to bring out the best in them and to help them accomplish their dreams. I will speak words of faith and victory, affirming them, approving them, letting them know they are valued. I will call out their seeds of greatness, helping them to rise higher and become all that God created them to be. ",

"I DECLARE I will speak only positive words of faith and victory over myself, my family, and my future. I will not use my words to describe my situation. I will use my words to change my situation. I will call in favor, good breaks, healing, and restoration. I will not talk to God about how big my problems are. I will talk to my problems about how big my God is.",
 "I DECLARE I will not just survive, I will thrive. I will prosper despite every difficulty that may come my way. I know every setback is a setup for a comeback. I will not get stagnant, give up on my dreams, or settle where I am. I know one touch of God’s favor can change everything. I’m ready for a year of blessings and a year of thriving. ",

"I DECLARE I will choose faith over fear. I will meditate on what is positive and what is good about my situation. I will use my energy, not to worry, but to believe. Fear has no part in my life. I will not dwell on negative, discouraging thoughts. My mind is set on what God says about me. I know his plan for me is for success, victory, and abundance. ",

"I DECLARE I am equipped for every good work God has planned for me. I am anointed and empowered by the Creator of the universe. Every bondage, every limitation, is being broken off of me. This is my time to shine. I will rise higher, overcome every obstacle, and experience victory like never before! ",
 "I DECLARE that I will ask God for big things in my life. I will pray bold prayers and expect big and believe big. I will ask God to bring to pass those hidden dreams that are deep in my heart. If certain promises don’t look like they will happen, I will not be intimidated and give up. I will pray with boldness, expecting God to show Himself strong, knowing that nothing is too difficult for Him. ",
 "I DECLARE God is working all things together for my good. He has a master plan for my life. There may be things i don’t understand right now but I’m not worried. I know all the pieces aren’t here yet. One day it will all come together and everything will make sense. I will see God’s amazing plan taking me places i never dreamed of. ",
 "I DECLARE God is going before me making crooked places straight. He has already lined up the right people, the right opportunities and solutions to problems I haven’t had. No person, no sickness, no disappointment, can stop His plan. What he promised will come to pass..",

"I DECLARE everything that doesn’t line up with God’s vision for my life is subject to change. Sickness, trouble, lack, mediocrity, are not permanent. They are only temporary. I will not be moved by what I see but by what I know. I am a victor and never a victim. I will become all God has created me to be. "
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
