import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-contact',
  templateUrl: './social-contact.component.html',
  styleUrls: ['./social-contact.component.scss']
})
export class SocialContactComponent implements OnInit {
  appNetButton: boolean = false;
  bitbucketButton: boolean = false;
  dropboxButton: boolean = false;
  facebookButton: boolean = true;
  flickrButton: boolean = false;
  foursquareButton: boolean = false;
  githubButton: boolean = false;
  googleButton: boolean = true;
  instagramButton: boolean = true;
  linkedinButton: boolean = false;
  microsoftButton: boolean = false;
  odnoklassnikiButton: boolean = false;
  openidButton: boolean = false;
  pinterestButton: boolean = false;
  redditButton: boolean = false;
  soundcloudButton: boolean = false;
  tumblrButton: boolean = false;
  twitterButton: boolean = true;
  vimeoButton: boolean = false;
  vkButton: boolean = false;
  yahooButton: boolean = false;

  buttons: [string, boolean][];

  constructor() { }

  ngOnInit() {
    this.buttons = [
      ['adn', this.appNetButton],
      ['bitbucket', this.bitbucketButton],
      ['dropbox', this.dropboxButton],
      ['facebook', this.facebookButton],
      ['flickr', this.flickrButton],
      ['foursquare', this.foursquareButton],
      ['github', this.githubButton],
      ['google', this.googleButton],
      ['instagram', this.instagramButton],
      ['linkedin', this.linkedinButton],
      ['microsoft', this.microsoftButton],
      ['odnoklassniki', this.odnoklassnikiButton],
      ['openid', this.openidButton],
      ['pinterest', this.pinterestButton],
      ['reddit', this.redditButton],
      ['soundcloud', this.soundcloudButton],
      ['tumblr', this.tumblrButton],
      ['twitter', this.twitterButton],
      ['vimeo', this.vimeoButton],
      ['vk', this.vkButton],
      ['yahoo', this.yahooButton]
    ];
  }
}
