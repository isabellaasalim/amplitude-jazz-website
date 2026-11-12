// EDIT YOUR WEBSITE HERE. Keep quotation marks around text and commas between items.
// Photos: put files in public/images/, then set src to 'images/your-photo.jpg'.
// Paths are relative (no leading slash) so photos also work on GitHub Pages.
// Always write descriptive alt text when adding a real photograph.
export const content = {
  // ORIGINAL ARTWORK: replace these files or point src to your own SVG/PNG/WebP.
  // Artwork is decorative; ensemble photographs still belong in the photo fields.
  artwork: {
    hero: 'art/band-garden.svg',
    outreach: 'art/little-melody.svg',
    waveform: 'art/sound-wave.svg',
    homeMark: 'art/home-mark.svg',
  },
  site: {
    name: 'Amplitude Jazz', tagline: 'a little jazz goes a long way.',
    location: 'Sunnyvale, California',
    descriptor: 'just a bunch of girls playing jazz!',
    footer: 'made with love & a little improv.',
    copyright: 'Amplitude Jazz', menuOpen: 'Open menu', menuClose: 'Close menu',
    skip: 'Skip to content', navLabel: 'Main navigation', homeLabel: 'Amplitude Jazz home',
    draftLabel: 'A space for your words', photoLabel: 'Photo to come',
  },
  navigation: [
    { id: 'home', label: 'Home' }, { id: 'about', label: 'About' },
    { id: 'ensemble', label: 'Our Ensemble' }, { id: 'performances', label: 'Performances' },
    { id: 'initiatives', label: 'Initiatives' }, { id: 'support', label: 'Support Us' },
    { id: 'contact', label: 'Contact' },
  ],
  home: {
    eyebrow: 'An all-girls jazz ensemble', titleTop: 'AMPLITUDE', titleBottom: 'JAZZ',
    intro: 'We’re Amplitude Jazz, a student-founded, all-girls jazz ensemble based in Sunnyvale, California. Music brings us together. Making more room for girls in jazz keeps us curious.',
    aboutButton: 'A little about us', ensembleButton: 'Meet the ensemble', contactButton: 'Get in touch',
    photo: { src: '', alt: '', label: 'the whole gang!', caption: '01 / The band, together', note: '[ADD YOUR ENSEMBLE PHOTO HERE]' },
    ticker: ['music first', 'room for every voice', 'a little improv'],
    performanceTitle: 'catch us somewhere.', performanceLabel: 'On the calendar',
    performanceButton: 'All performances',
    initiativeTitle: 'and then some...', initiativeLabel: 'More than a set list',
    initiativeText: 'Our interest in jazz reaches beyond playing it. We’re exploring advocacy, music education, and ways to connect with our community.',
    initiativeButton: 'Explore our initiatives',
  },
  about: {
    eyebrow: 'The story so far', title: 'how it all started.',
    sections: [
      { title: 'Our story', text: "Amplitude began with a simple observation: there weren't very many girls in the room.\n\nAfter years of playing in jazz ensembles and often finding herself one of the only girls onstage, our founder wanted to create something different. Not just another band, but a space where young women could play, improvise, learn from one another, and feel like they belonged.\n\nWhat started as an idea became a group of musicians brought together by a shared love of jazz. We're still growing, still learning, and still figuring things out along the way, but that's part of what makes it exciting. At the heart of it all, we're just a bunch of girls who really love making music together." },
      { title: 'Our mission', text: "Our mission is to amplify the voices and talents of young women in jazz through performance, education, and community. We strive to create a welcoming space where girls can develop as musicians, express themselves creatively, and build the confidence to take up space in a genre where women have historically been underrepresented.\n\nAbove all, we believe that great music comes from listening to one another, supporting each other, and giving every voice a chance to be heard." },
      { title: 'Our vision', text: "We envision a jazz community where girls don't have to wonder whether they belong, because their presence is simply part of the music.\n\nAs Amplitude grows, we hope to expand beyond our ensemble through workshops, mentorship, community performances, and educational initiatives that introduce more young musicians to jazz. Our goal is to help create a future where more girls feel encouraged to pick up an instrument, take a solo, and make their voices heard." },
      { title: 'Why girls in jazz?', text: "Jazz has always been a music of creativity, collaboration, and individuality. Yet throughout its history, women instrumentalists have often received less recognition and fewer opportunities than their male counterparts.\n\nFor many young girls, being one of the only female musicians in an ensemble can feel intimidating, especially when it comes to improvising, taking solos, or stepping into leadership roles.\n\nWe believe representation matters – seeing other girls perform, improvise, and lead can make a difference in how young musicians see themselves and what they believe is possible. Amplitude exists to help make those experiences a little less rare." },
      { title: 'Our values', values: [
        {
                "label": "Music comes first.",
                "text": "We're musicians before anything else. We care about growing as performers, challenging ourselves, and making music we're proud to share."
        },
        {
                "label": "Room for every voice.",
                "text": "Every musician brings something different to the ensemble. We value collaboration, individuality, and making space for everyone to contribute."
        },
        {
                "label": "Learning together.",
                "text": "Jazz is a lifelong conversation. We believe in asking questions, trying new things, listening closely, and helping each other grow."
        },
        {
                "label": "Making a difference.",
                "text": "We hope that what we do extends beyond the stage, encouraging more girls to explore jazz and helping create opportunities for those who come after us."
        }
] },
    ],
  },
  ensemble: {
    eyebrow: 'Meet the band', title: 'the girls behind the groove.',
    intro: '[PASTE ENSEMBLE INTRODUCTION HERE]',
    groupPhoto: { src: '', alt: '', label: 'Everyone in the picture.', caption: 'The ensemble', note: '[ADD A GROUP PHOTO HERE]' },
    // Copy a member object to add someone; delete objects to remove cards.
    // Leave bio empty ('') if you prefer no short biography.
    members: [
      { id: 'member-1', name: '[MEMBER NAME]', instrument: '[INSTRUMENT]', bio: '', photo: { src: '', alt: '', label: '[MEMBER PHOTO]' } },
      { id: 'member-2', name: '[MEMBER NAME]', instrument: '[INSTRUMENT]', bio: '', photo: { src: '', alt: '', label: '[MEMBER PHOTO]' } },
      { id: 'member-3', name: '[MEMBER NAME]', instrument: '[INSTRUMENT]', bio: '', photo: { src: '', alt: '', label: '[MEMBER PHOTO]' } },
      { id: 'member-4', name: '[MEMBER NAME]', instrument: '[INSTRUMENT]', bio: '', photo: { src: '', alt: '', label: '[MEMBER PHOTO]' } },
      { id: 'member-5', name: '[MEMBER NAME]', instrument: '[INSTRUMENT]', bio: '', photo: { src: '', alt: '', label: '[MEMBER PHOTO]' } },
      { id: 'member-6', name: '[MEMBER NAME]', instrument: '[INSTRUMENT]', bio: '', photo: { src: '', alt: '', label: '[MEMBER PHOTO]' } },
      { id: 'member-7', name: '[MEMBER NAME]', instrument: '[INSTRUMENT]', bio: '', photo: { src: '', alt: '', label: '[MEMBER PHOTO]' } },
      { id: 'member-8', name: '[MEMBER NAME]', instrument: '[INSTRUMENT]', bio: '', photo: { src: '', alt: '', label: '[MEMBER PHOTO]' } },
      { id: 'member-9', name: '[MEMBER NAME]', instrument: '[INSTRUMENT]', bio: '', photo: { src: '', alt: '', label: '[MEMBER PHOTO]' } },
      { id: 'member-10', name: '[MEMBER NAME]', instrument: '[INSTRUMENT]', bio: '', photo: { src: '', alt: '', label: '[MEMBER PHOTO]' } },
      { id: 'member-11', name: '[MEMBER NAME]', instrument: '[INSTRUMENT]', bio: '', photo: { src: '', alt: '', label: '[MEMBER PHOTO]' } },
    ],
  },
  performances: {
    eyebrow: 'Live & in good company', title: 'come hear us play!', upcoming: 'Upcoming performances', past: 'Past performances',
    emptyUpcoming: 'The next set is still taking shape. Check back for upcoming performances.',
    emptyPast: 'Our performance scrapbook will live here. More to come.',
    bookingTitle: 'Have a stage in mind?', bookingText: 'Let’s talk about bringing Amplitude Jazz to your event.', bookingButton: 'Booking inquiries',
    // Add real events here. Example (replace EVERY placeholder):
    // { id: 'event-1', title: '[EVENT TITLE]', date: '[DATE]', venue: '[VENUE]', location: '[LOCATION]', description: '[DESCRIPTION]' }
    upcomingEvents: [], pastEvents: [],
  },
  initiatives: {
    eyebrow: 'Making room, together', title: 'more than just music.',
    sections: [
      { title: 'Girls in Jazz Advocacy', text: "We're passionate about making more room for girls in jazz. Through performance, representation, and education, we hope to encourage more young women to explore jazz, embrace improvisation, and feel confident making their voices heard." },
      { title: 'Music Education and Workshops', text: "We hope to bring jazz to more young musicians through beginner-friendly workshops, interactive performances, and opportunities to learn together. Our goal is to make jazz feel accessible, exciting, and welcoming to everyone." },
      { title: 'Community Outreach', text: "Music is meant to be shared! We're looking forward to connecting with local schools, libraries, and community organizations through performances, collaborations, and events that bring people together through jazz." },
      { title: 'Future Programs', text: "We're just getting started! As Amplitude grows, we hope to develop mentorship opportunities, educational events, and collaborative projects that connect young female musicians and inspire the next generation of girls in jazz." },
    ],
  },
  support: {
    eyebrow: 'Good things happen together', title: 'lend us a hand?',
    sections: [
      { title: 'A little support goes a long way', text: "We're a group of young musicians with a love for jazz and some big ideas for where it can take us. From performing together to creating more opportunities for girls in music, we're hoping to make a little jazz go a long way.\n\nWhether it's helping us find our next stage, supporting a workshop, or simply spreading the word, a little support means a whole lot." },
      { title: 'Partnership opportunities', text: "We love finding new ways to bring people together through music! Amplitude Jazz is always excited to connect with local businesses, schools, community organizations, and fellow musicians who share our love for jazz and music education.\n\nWhether it's performing at an event, hosting a workshop, or collaborating on a creative project, we're open to partnerships that help us share our music and create meaningful opportunities for young musicians." },
      { title: 'Ways to support Amplitude Jazz', text: "There are plenty of ways to help us grow! From inviting us to perform at community events to supporting instruments, sheet music, rehearsal materials, and educational workshops, every bit of support helps us do what we love.\n\nWe're also welcoming sponsorships, in-kind contributions, and opportunities to collaborate. And sometimes, simply sharing our music or spreading the word makes all the difference!" },
    ],
    button: 'Sponsorship inquiries',
  },
  contact: {
    eyebrow: 'Let’s start a conversation', title: 'drop us a note!',
    reasons: ['Performance booking inquiries', 'Collaboration and outreach inquiries', 'General questions'],
    emailLabel: 'Write to us', email: 'amplitudejazz@gmail.com',
    socialTitle: 'Find us elsewhere',
    founder: { heading: 'a note for the founder?', text: 'For questions about Amplitude Jazz, collaborations, or anything else, feel free to reach out at' },
    // Add only official https:// profile URLs. Empty URLs render as plain placeholders.
    socials: [{ label: '@amplitudejazz', url: 'https://www.instagram.com/amplitudejazz/' }],
  },
};
