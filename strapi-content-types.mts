export interface Article {
  title: string;
  slug?: string;
  image?: number;
  blocks?: (BlocksRelatedArticles | BlocksFaq | BlocksCtaCommandLine)[];
  seo?: SharedSeo;
  publicationState?: (`Draft` | `In review` | `Changes requested` | `Publication scheduled` | `Published`);
  category?: number | { set: [number] | [{ id: number }] } | { disconnect?: [number] | [{ id: number }], connect?: [number] | [{ id: number, position?: { before?: number, after?: number, start?: boolean, end?: boolean } }] };
  editors?: number[] | { set: number[] | { id: number }[] } | { disconnect?: number[] | { id: number }[], connect?: number[] | { id: number, position?: { before?: number, after?: number, start?: boolean, end?: boolean } }[] };
  publicationStages?: any;
  ckeditor_content: string;
}

export interface BlogPage {
  header?: SharedHeader;
  slug: string;
  categoryText?: string;
  articlesPerPage: number;
  blocks?: (BlocksCtaCommandLine | BlocksCta)[];
  seo?: SharedSeo;
}

export interface Category {
  name: string;
  slug?: string;
  restaurants?: number[] | { set: number[] | { id: number }[] } | { disconnect?: number[] | { id: number }[], connect?: number[] | { id: number, position?: { before?: number, after?: number, start?: boolean, end?: boolean } }[] };
  articles?: number[] | { set: number[] | { id: number }[] } | { disconnect?: number[] | { id: number }[], connect?: number[] | { id: number, position?: { before?: number, after?: number, start?: boolean, end?: boolean } }[] };
}

export interface Cookie {
  name: string;
  description: string;
  host: string;
  category: number | { set: [number] | [{ id: number }] } | { disconnect?: [number] | [{ id: number }], connect?: [number] | [{ id: number, position?: { before?: number, after?: number, start?: boolean, end?: boolean } }] };
  party: (`First-party` | `Second-party` | `Third-party`);
  isVisible: boolean;
  duration?: any;
}

export interface CookieCategory {
  name: string;
  description: string;
  cookies?: number[] | { set: number[] | { id: number }[] } | { disconnect?: number[] | { id: number }[], connect?: number[] | { id: number, position?: { before?: number, after?: number, start?: boolean, end?: boolean } }[] };
}

export interface Global {
  navigation?: GlobalNavigation;
  footer?: GlobalFooter;
}

export interface Page {
  title: string;
  slug?: string;
  blocks?: (BlocksCtaCommandLine | BlocksCta | BlocksFaq | BlocksFeaturesWithImages | BlocksFeatures | BlocksHero | BlocksPricing | BlocksRelatedArticles | BlocksRelatedRestaurants | BlocksTeam | BlocksTestimonial)[];
  seo?: SharedSeo;
  editors?: number[] | { set: number[] | { id: number }[] } | { disconnect?: number[] | { id: number }[], connect?: number[] | { id: number, position?: { before?: number, after?: number, start?: boolean, end?: boolean } }[] };
}

export interface Place {
  name: string;
  restaurants?: number[] | { set: number[] | { id: number }[] } | { disconnect?: number[] | { id: number }[], connect?: number[] | { id: number, position?: { before?: number, after?: number, start?: boolean, end?: boolean } }[] };
}

export interface Restaurant {
  name: string;
  slug?: string;
  images: { id: number }[];
  price: (`p1` | `p2` | `p3` | `p4`);
  information?: RestaurantInformation;
  socialNetworks?: SharedSocialNetworks[];
  blocks?: (RestaurantRichContent | BlocksRelatedRestaurants | BlocksFaq | BlocksCta | BlocksCtaCommandLine)[];
  seo?: SharedSeo;
  category?: number | { set: [number] | [{ id: number }] } | { disconnect?: [number] | [{ id: number }], connect?: [number] | [{ id: number, position?: { before?: number, after?: number, start?: boolean, end?: boolean } }] };
  place?: number | { set: [number] | [{ id: number }] } | { disconnect?: [number] | [{ id: number }], connect?: [number] | [{ id: number, position?: { before?: number, after?: number, start?: boolean, end?: boolean } }] };
  reviews?: number[] | { set: number[] | { id: number }[] } | { disconnect?: number[] | { id: number }[], connect?: number[] | { id: number, position?: { before?: number, after?: number, start?: boolean, end?: boolean } }[] };
}

export interface RestaurantPage {
  header?: SharedHeader;
  slug: string;
  categoryText: string;
  PlaceText: string;
  restaurantsPerPage: number;
  blocks?: (BlocksCta)[];
  seo?: SharedSeo;
}

export interface Review {
  content?: string;
  note: number;
  author?: number | { set: [number] | [{ id: number }] } | { disconnect?: [number] | [{ id: number }], connect?: [number] | [{ id: number, position?: { before?: number, after?: number, start?: boolean, end?: boolean } }] };
  restaurant?: number | { set: [number] | [{ id: number }] } | { disconnect?: [number] | [{ id: number }], connect?: [number] | [{ id: number, position?: { before?: number, after?: number, start?: boolean, end?: boolean } }] };
}

export interface BlocksCtaCommandLine {
  __component?: 'blocks.cta-command-line'
  theme?: (`primary` | `secondary` | `muted`);
  title?: string;
  text?: string;
  commandLine?: string;
}

export interface BlocksCta {
  __component?: 'blocks.cta'
  theme?: (`primary` | `secondary` | `muted`);
  title?: string;
  text?: string;
  buttons?: SharedButton[];
}

export interface BlocksFaq {
  __component?: 'blocks.faq'
  title?: string;
  theme?: (`primary` | `secondary` | `muted`);
  faq?: SharedQuestionAnswer[];
}

export interface BlocksFeaturesWithImages {
  __component?: 'blocks.features-with-images'
  header?: SharedHeader;
  text: string;
  theme?: (`primary` | `secondary` | `muted`);
  image?: number;
  featuresCheck?: SharedFeaturesCheck[];
}

export interface BlocksFeatures {
  __component?: 'blocks.features'
  theme?: (`primary` | `secondary` | `muted`);
  header?: SharedHeader;
  cards?: SharedCard[];
}

export interface BlocksHero {
  __component?: 'blocks.hero'
  images?: { id: number }[];
  header?: SharedHeader;
  text?: string;
  buttons?: SharedButton[];
}

export interface BlocksPricing {
  __component?: 'blocks.pricing'
  header?: SharedHeader;
  pricingCards?: PricingPricingCards[];
}

export interface BlocksRelatedArticles {
  __component?: 'blocks.related-articles'
  header?: SharedHeader;
  articles?: number[] | { set: number[] | { id: number }[] } | { disconnect?: number[] | { id: number }[], connect?: number[] | { id: number, position?: { before?: number, after?: number, start?: boolean, end?: boolean } }[] };
}

export interface BlocksRelatedRestaurants {
  __component?: 'blocks.related-restaurants'
  header?: SharedHeader;
  restaurants?: number[] | { set: number[] | { id: number }[] } | { disconnect?: number[] | { id: number }[], connect?: number[] | { id: number, position?: { before?: number, after?: number, start?: boolean, end?: boolean } }[] };
}

export interface BlocksTeam {
  __component?: 'blocks.team'
  header?: SharedHeader;
  members?: number[] | { set: number[] | { id: number }[] } | { disconnect?: number[] | { id: number }[], connect?: number[] | { id: number, position?: { before?: number, after?: number, start?: boolean, end?: boolean } }[] };
}

export interface BlocksTestimonial {
  __component?: 'blocks.testimonial'
  theme?: (`primary` | `secondary` | `muted`);
  text: string;
  author?: number | { set: [number] | [{ id: number }] } | { disconnect?: [number] | [{ id: number }], connect?: [number] | [{ id: number, position?: { before?: number, after?: number, start?: boolean, end?: boolean } }] };
}

export interface GlobalFooter {
  __component?: 'global.footer'
  footerColumns?: SharedFooterColumns[];
  socialNetworks?: SharedSocialNetworks[];
  button?: SharedButton;
  label?: string;
}

export interface GlobalNavigation {
  __component?: 'global.navigation'
  links?: SharedLink[];
  leftButton?: SharedLink;
  rightButton?: SharedLink;
}

export interface PricingPerks {
  __component?: 'pricing.perks'
  name: string;
  included: boolean;
}

export interface PricingPricingCards {
  __component?: 'pricing.pricing-cards'
  title: string;
  description?: string;
  price: number;
  perks?: PricingPerks[];
}

export interface RestaurantInformation {
  __component?: 'restaurant.information'
  description?: string;
  opening_hours?: RestaurantOpeningHours[];
  location?: RestaurantLocation;
}

export interface RestaurantLocation {
  __component?: 'restaurant.location'
  address?: string;
  website?: string;
  phone?: string;
}

export interface RestaurantOpeningHours {
  __component?: 'restaurant.opening-hours'
  day_interval: string;
  opening_hour?: string;
  closing_hour?: string;
}

export interface RestaurantRichContent {
  __component?: 'restaurant.rich-content'
  content?: string;
}

export interface SharedButton {
  __component?: 'shared.button'
  theme: (`primary` | `secondary` | `muted`);
  link?: SharedLink;
}

export interface SharedCard {
  __component?: 'shared.card'
  title?: string;
  text?: string;
  image?: number;
}

export interface SharedComment {
  __component?: 'shared.comment'
  content?: string;
}

export interface SharedFeaturesCheck {
  __component?: 'shared.features-check'
  text?: string;
}

export interface SharedFooterColumns {
  __component?: 'shared.footer-columns'
  links?: SharedLink[];
}

export interface SharedHeader {
  __component?: 'shared.header'
  theme?: (`primary` | `secondary` | `muted`);
  label?: string;
  title?: string;
}

export interface SharedLink {
  __component?: 'shared.link'
  href: string;
  label: string;
  target?: (`_blank`);
  isExternal?: boolean;
}

export interface SharedMetaSocial {
  __component?: 'shared.meta-social'
  socialNetwork: (`Facebook` | `Twitter`);
  title: string;
  description: string;
  image?: number;
}

export interface SharedPublication {
  __component?: 'shared.publication'
  publish_at?: Date;
  ready?: boolean;
}

export interface SharedQuestionAnswer {
  __component?: 'shared.question-answer'
  question?: string;
  answer?: string;
}

export interface SharedSeo {
  __component?: 'shared.seo'
  metaTitle: string;
  metaDescription: string;
  metaImage: number;
  metaSocial?: SharedMetaSocial[];
  keywords?: string;
  metaRobots?: string;
  structuredData?: any;
  metaViewport?: string;
  canonicalURL?: string;
}

export interface SharedSocialNetworks {
  __component?: 'shared.social-networks'
  url: string;
}

export interface SharedTeamCard {
  __component?: 'shared.team-card'
  fullname: string;
  job: string;
  description: string;
  socialNetworks?: SharedSocialNetworks[];
}

