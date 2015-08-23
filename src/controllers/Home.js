'use strict';

import debug from '../lib/debug';

class HomePage {

  constructor(server, path) {
    this.server = server;
    this.template = 'home/index';
    this.path = path;
    this.setCopies();
  }


  setCopies() {
    this.copies = {
      // Top section
      //
      title: 'Amazcota',
      platform: 'Amazcota',
      slogan: 'Plataforma de adopción',
      facebookButton: 'Pre-registro',

      // Persuasion section
      //
      why1: '¡Porque adopatar está bien padre!',
      why2: '¡Porque adopatar es bonito!',
      hashtag: '#adopta',

      // Contribute section
      //
      contribute: 'Colabora',
      quote: 'No puedes comprar el amor, pero puedes adoptarlo.',
      quoteSource: 'www.petalatino.com'
    };
  }

  dispatch() {
    this.server.get(this.path, (req, res) => {
      res.render(this.template, this.copies);
    });
  }
}

export default HomePage;
