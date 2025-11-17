const touristSpots = [
  {
    image: 'https://images.unsplash.com/photo-1734313237467-1f93eb3abbe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwZmFybXxlbnwxfHx8fDE3NjE3NDQ5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Lush strawberry fields in La Trinidad with mountains in the background.',
    name: 'La Trinidad Strawberry Farm',
    description: "Famous for its vast strawberry fields where visitors can pick their own strawberries. It's the primary reason La Trinidad is known as the 'Strawberry Capital of the Philippines.' The farm also features vendors selling strawberry-based products like jam, ice cream, and wine.",
    location: 'Km. 5, La Trinidad, Benguet',
    history: "Established in the 1950s, the farm became a major agricultural and tourism hub, showcasing the valley's ideal conditions for growing strawberries and other produce. It is managed by the Benguet State University.",
    gallery: [
      'https://images.unsplash.com/photo-1594270433722-5b18f50b4a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHN0cmF3YmVycmllc3xlbnwxfHx8fDE3NjI4NTc1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1587411737105-2207b1a32943?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwaWNlJTIwY3JlYW18ZW58MXx8fHwxNzYyODU3NTM5fDA&ixlib.rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1549477089-3b652a6a5b9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwcGlja2luZ3xlbnwxfHx8fDE3NjI4NTc1Njh8MA&ixlib.rb-4.1.0&q=80&w=1080'
    ],
    openingHours: '7:00 AM - 7:00 PM Daily',
    bestTimeToVisit: 'December to February (Peak Season)',
    nearbyEmergency: [
      {
        type: 'Hospital',
        name: 'Benguet General Hospital',
        distance: 'Approx. 5-10 min drive'
      },
      {
        type: 'Police',
        name: 'La Trinidad Municipal Police Station',
        distance: 'Approx. 5-10 min drive'
      }
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.854085449557!2d120.59121961536838!3d16.48011988868615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a38a7983637b%3A0x948297b102b4859a!2sLa%20Trinidad%20Strawberry%20Farm!5e0!3m2!1sen!2sph!4v1667825595697!5m2!1sen!2sph'
  },
  {
    image: 'https://images.unsplash.com/photo-1595088258328-a83b2d184a44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwdGVtcGxlJTIwcGhpbGlwcGluZXN8ZW58MXx8fHwxNzYyODU2NTg4fDA&ixlib-rb-4.1.0&q=80&w=1080',
    alt: 'Ornate Bell Church temple in La Trinidad with a pagoda.',
    name: 'Bell Church',
    description: 'A beautiful and serene Taoist temple complex with intricate architecture, pagodas, and ponds. It serves as a spiritual center for the local Chinese-Filipino community and is open to visitors seeking tranquility and a glimpse of different cultural practices.',
    location: 'Barangay Balili, La Trinidad, Benguet',
    history: 'Founded in the 1960s by Chinese immigrants, the Bell Church is a testament to the cultural fusion in the Cordilleras, blending Taoist, Buddhist, and Confucian principles. It was established to serve the spiritual needs of the growing Chinese community in the region.',
    gallery: [
      'https://images.unsplash.com/photo-1589332512160-57f64664a787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW9pc3QlMjB0ZW1wbGV8ZW58MXx8fHwxNzYyODU3ODMyfDA&ixlib.rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1618218712684-a8235e2361a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmNlbnNlJTIwYnVybmluZ3xlbnwxfHx8fDE3NjI4NTc4NjB8MA&ixlib.rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1557088737-56c556a00a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRvdXJhZ2UlMjBwYWdvZGF8ZW58MXx8fHwxNzYyODU3ODk3fDA&ixlib.rb-4.1.0&q=80&w=1080'
    ],
    openingHours: '8:00 AM - 5:00 PM Daily',
    bestTimeToVisit: 'Year-round, preferably on a sunny day.',
    nearbyEmergency: [
      {
        type: 'Hospital',
        name: 'Benguet General Hospital',
        distance: 'Approx. 10-15 min drive'
      },
      {
        type: 'Police',
        name: 'La Trinidad Municipal Police Station',
        distance: 'Approx. 10-15 min drive'
      }
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.973957245781!2d120.58988231536832!3d16.4746419886903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a38612741561%3A0x6b77207604313f89!2sBell%20Church!5e0!3m2!1sen!2sph!4v1667825654060!5m2!1sen!2sph'
  },
  {
    image: 'https://images.unsplash.com/photo-1599388136367-293427b50849?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHZpZXclMjBwaGlsaXBwaW5lc3xlbnwxfHx8fDE3NjI4NTY3MTZ8MA&ixlib-rb-4.1.0&q=80&w=1080',
    alt: 'Limestone rock formations atop Mount Kalugong with a view of the valley.',
    name: 'Mount Kalugong Cultural Village',
    description: "A beginner-friendly eco-park offering a short hike to limestone rock formations with panoramic views of the La Trinidad valley. It also features cultural huts, a coffee shop, and spots for picnics, making it a perfect spot for relaxation and light adventure.",
    location: 'Barangay Tawang, La Trinidad, Benguet',
    history: "The name 'Kalugong' means 'hat' in the local dialect, named after a prominent rock formation that resembles a hat. It is considered a sacred place by the Ibaloi people, with the park developed to preserve its natural beauty and cultural significance.",
    gallery: [
      'https://images.unsplash.com/photo-1519923884842-9971932c5e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGlsaXBwaW5lJTIwbW91bnRhaW4lMjB0cmFpbHxlbnwxfHx8fDE3NjI4NTgwMTN8MA&ixlib-rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1569427971784-18c6d1f5e851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjB3aXRoJTIwbW91bnRhaW4lMjB2aWV3fGVufDF8fHx8MTc2Mjg1ODA0N3ww&ixlib.rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1605338270525-8623c21b9b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGlsaXBwaW5lJTIwY3VsdHVyYWwlMjBodXR8ZW58MXx8fHwxNzYyODU4MDc0fDA&ixlib.rb-4.1.0&q=80&w=1080'
    ],
    openingHours: '6:00 AM - 6:00 PM Daily',
    bestTimeToVisit: 'Early morning for sunrise or late afternoon for sunset.',
    nearbyEmergency: [
      {
        type: 'Hospital',
        name: 'Benguet General Hospital',
        distance: 'Approx. 15-20 min drive'
      },
      {
        type: 'Police',
        name: 'La Trinidad Municipal Police Station',
        distance: 'Approx. 15-20 min drive'
      }
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.818447883296!2d120.5833446153684!3d16.48202598868502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a3f01c296687%3A0x63390c2a715f5d0!2sMt.%20Kalugong!5e0!3m2!1sen!2sph!4v1667825701469!5m2!1sen!2sph'
  },
  {
    image: 'https://images.unsplash.com/photo-1610410196774-728b7e7a8e79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGhvdXNlcyUyMGhpbGxzaWRlfGVufDF8fHx8MTc2Mjg1Njc4NHww&ixlib.rb-4.1.0&q=80&w=1080',
    alt: 'Vibrant houses of the Stobosa Hillside Homes Artwork forming a mural.',
    name: 'Colors of Stobosa',
    description: "A massive community art project where hundreds of houses on a hillside are painted to form a giant, colorful mural of sunflowers. It's a stunning sight from the main road and a symbol of community collaboration, resilience, and beautification.",
    location: 'Barangay Balili, La Trinidad, Benguet',
    history: 'Inspired by the favelas of Brazil, this project was initiated by the Tam-awan Village artists and the Department of Tourism. The name "Stobosa" is an acronym for the three sitios (Stonehill, Botiwtiw, and Sadjap) that compose the community.',
    gallery: [
      'https://images.unsplash.com/photo-1547906911-332a5345511b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMG5laWdoYm9yaG9vZHxlbnwxfHx8fDE3NjI4NTgxODV8MA&ixlib-rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1508210338346-cf97495594d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBhcnQlMjBtdXJhbHxlbnwxfHx8fDE3NjI4NTgyMjN8MA&ixlib.rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1558220557-54814a806aa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXZlbGElMjBhcnR8ZW58MXx8fHwxNzYyODU4MjUxfDA&ixlib.rb-4.1.0&q=80&w=1080'
    ],
    openingHours: '24/7 (viewable from the road)',
    bestTimeToVisit: 'Daylight hours for best visibility.',
    nearbyEmergency: [
      {
        type: 'Hospital',
        name: 'Benguet General Hospital',
        distance: 'Approx. 10 min drive'
      },
      {
        type: 'Police',
        name: 'La Trinidad Municipal Police Station',
        distance: 'Approx. 10 min drive'
      }
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.9702209772183!2d120.59021201536832!3d16.474825988690204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a38618e76c11%3A0x6b77207604313f89!2sColors%20of%20Stobosa!5e0!3m2!1sen!2sph!4v1667825732168!5m2!1sen!2sph'
  }
];

module.exports = touristSpots;
