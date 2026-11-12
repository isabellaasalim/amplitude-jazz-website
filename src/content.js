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
    photo: { src: '', alt: '', label: 'photos coming soon!', caption: '01 / The band, together' },
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
      { title: 'Our story', text: "Amplitude began with a simple observation: there weren't very many girls in the room.\n\nAfter years of often being one of the only girls in jazz programs, our founder wanted to create a space where young women could play, improvise, and grow together.\n\nWhat started as an idea became a group of musicians united by their love of jazz. We're still growing, but at heart, we're just a bunch of girls who love making music together." },
      { title: 'Our mission', text: "Our mission is to amplify the voices and talents of young women in jazz through performance, education, and community. We strive to create a welcoming space where girls can grow as musicians, express themselves, and feel confident taking up space in jazz.\n\nWe believe great music comes from listening, supporting one another, and giving every voice a chance to be heard." },
      { title: 'Our vision', text: "We envision a jazz community where girls never have to question whether they belong.\n\nAs Amplitude grows, we hope to create more opportunities through workshops, mentorship, and community performances, inspiring the next generation of girls to pick up an instrument, take a solo, and make their voices heard." },
      { title: 'Why girls in jazz?', text: "Jazz celebrates creativity and individuality, yet women instrumentalists have historically faced underrepresentation and fewer opportunities.\n\nBeing one of the only girls in an ensemble can feel intimidating, especially when improvising or stepping into leadership roles. We believe representation matters, and Amplitude hopes to make seeing girls perform, improvise, and lead a little less rare." },
      { title: 'Our values', values: [
        {"label": "Music comes first.", "text": "We're dedicated to growing as musicians and making music we're proud to share."},
        {"label": "Room for every voice.", "text": "We celebrate individuality, collaboration, and everyone's unique contributions."},
        {"label": "Learning together.", "text": "We believe in listening, experimenting, and helping one another grow."},
        {"label": "Making a difference.", "text": "We hope to inspire more girls to explore jazz and create opportunities for future musicians."},
      ] },
    ],
  },
  ensemble: {
    eyebrow: 'Meet the band', title: 'the girls behind the groove.',
    intro: '[PASTE ENSEMBLE INTRODUCTION HERE]',
    groupPhoto: { src: '', alt: '', label: 'photos coming soon!', caption: 'The ensemble' },
    // Copy a member object to add someone; delete objects to remove cards.
    // Leave bio empty ('') if you prefer no short biography.
    members: [
      { id: 'member-1', name: "Isabella Salim", instrument: "Tenor Saxophone \u2022 Vocals", role: 'Founder', bio: '', photo: { src: '', alt: '', label: 'photo coming soon!' } },
      { id: 'member-2', name: "Avery Hay", instrument: "Tenor Saxophone", bio: '', photo: { src: '', alt: '', label: 'photo coming soon!' } },
      { id: 'member-3', name: "Karen Garcia", instrument: "Baritone Saxophone", bio: '', photo: { src: '', alt: '', label: 'photo coming soon!' } },
      { id: 'member-4', name: "Meena Swaminathan", instrument: "Trumpet", bio: '', photo: { src: '', alt: '', label: 'photo coming soon!' } },
      { id: 'member-5', name: "Gianna Ruan", instrument: "Guitar", bio: '', photo: { src: '', alt: '', label: 'photo coming soon!' } },
      { id: 'member-6', name: "Amita Bhat", instrument: "Guitar \u2022 Vocals", bio: '', photo: { src: '', alt: '', label: 'photo coming soon!' } },
      { id: 'member-7', name: "Amelia Lai", instrument: "Bass", bio: '', photo: { src: '', alt: '', label: 'photo coming soon!' } },
      { id: 'member-8', name: "Lani Narin", instrument: "Bass", bio: '', photo: { src: '', alt: '', label: 'photo coming soon!' } },
      { id: 'member-9', name: "Katheryn Wang", instrument: "Keys", bio: '', photo: { src: '', alt: '', label: 'photo coming soon!' } },
      { id: 'member-10', name: "Elizabeth Yang", instrument: "Keys \u2022 Vocals", bio: '', photo: { src: '', alt: '', label: 'photo coming soon!' } },
      { id: 'member-11', name: "Rio Sato", instrument: "Drums", bio: '', photo: { src: '', alt: '', label: 'photo coming soon!' } },
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
