export default (environment = 'development') => ({
  // eslint-disable-line

  // link file UUID
  id: '',

  // canonical URL of the published page
  //  get filled in by the ./configure script
  url: 'https://ig.ft.com/gazprom-pipeline-power-of-siberia/',

  googleDocId: '1VvOXK0_2FnTcXt-wUB0qFulUkxXl8IWbce57sGGp6OQ',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date(),

  headline: 'Russia’s $55bn pipeline gamble on China’s demand for gas',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'Putin pivots to Beijing with biggest energy project since fall of Soviet Union',

  topic: {
    name: 'World',
    url: '/world',
  },

  // relatedArticle: {
  //   text: 'Related article »',
  //   url: 'https://en.wikipedia.org/wiki/Politics_and_the_English_Language',
  // },

  mainImage: {
    title: '',
    description: '',
    credit: 'Gazprom',

    // You can provide a UUID to an image and it was populate everything else
    uuid: 'c4bf0be4-7c15-11e4-a7b8-00144feabdc0',

    topper: {
      master:
        'https://s3-eu-west-1.amazonaws.com/ft-ig-content-prod/v2/ft-interactive/gas-pipelines/video/drone-footage.mp4',
      square:
        'https://s3-eu-west-1.amazonaws.com/ft-ig-content-prod/v2/ft-interactive/gas-pipelines/video/drone-footage-square.mp4',
    },

    // You can also provide a URL
    // url: 'https://image.webservices.ft.com/v1/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Fc4bf0be4-7c15-11e4-a7b8-00144feabdc0?source=ig&fit=scale-down&width=700',
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [{ name: ' Henry Foy', url: '/henry-foy', location: ' in Neryungri' }],

  // Appears in the HTML <title>
  title: '',

  // meta data
  description: '',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  socialImage:
    'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Fft-ig-content-prod%2Fv2%2Fft-interactive%2Fgas-pipelines%2Fmaster%2Fimages%2FAVD57499--98f57fe57ed6aeebe328bfe450ef1d60.jpg?source=ig',
  // socialHeadline: '',
  // socialDescription: '',
  // twitterCreator: '@author's_account', // shows up in summary_large_image cards

  // TWEET BUTTON CUSTOM TEXT
  // tweetText: '',
  //
  // Twitter lists these as suggested accounts to follow after a user tweets (do not include @)
  // twitterRelatedAccounts: ['authors_account_here', 'ftdata'],

  // Fill out the Facebook/Twitter metadata sections below if you want to
  // override the General social options above

  // TWITTER METADATA (for Twitter cards)
  // twitterImage: '',
  // twitterHeadline: '',
  // twitterDescription: '',

  // FACEBOOK
  // facebookImage: '',
  // facebookHeadline: '',
  // facebookDescription: '',

  // ADVERTISING
  ads: {
    // Ad unit hierarchy makes ads more granular.
    gptSite: 'ft.com',
    // Start with ft.com and /companies /markets /world as appropriate to your story
    gptZone: false,
    // granular targeting is optional and will be specified by the ads team
    dfpTargeting: false,
  },

  tracking: {
    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',
    /*
    Product name

    This will usually default to IG
    however another value may be needed
    */
    // product: '',
  },
});
