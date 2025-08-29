import type { Schema, Struct } from '@strapi/strapi';

export interface BoeLoginData extends Struct.ComponentSchema {
  collectionName: 'components_boe_login_data';
  info: {
    description: '';
    displayName: 'Login-Data';
  };
  attributes: {
    highlight_text: Schema.Attribute.JSON;
    logo_auth_sidebar: Schema.Attribute.Media<'images'>;
    resume: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BoeNavbar extends Struct.ComponentSchema {
  collectionName: 'components_boe_navbars';
  info: {
    description: '';
    displayName: 'Navbar';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    logo_heigth: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<150>;
    logo_widht: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<150>;
    tabs: Schema.Attribute.JSON & Schema.Attribute.Required;
    tabs_icons: Schema.Attribute.Media<'images', true> &
      Schema.Attribute.Required;
  };
}

export interface BoeTableData extends Struct.ComponentSchema {
  collectionName: 'components_boe_table_data';
  info: {
    description: '';
    displayName: 'Table-Data';
  };
  attributes: {
    endpoint: Schema.Attribute.String;
    filters: Schema.Attribute.JSON & Schema.Attribute.Required;
    have_tabs: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    table_titles: Schema.Attribute.JSON & Schema.Attribute.Required;
    tabs: Schema.Attribute.JSON;
    three_dot_menu_options: Schema.Attribute.JSON;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavbarNavItem extends Struct.ComponentSchema {
  collectionName: 'components_navbar_nav_items';
  info: {
    description: '';
    displayName: 'NavItem';
    icon: '';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    iconFocused: Schema.Attribute.Media<'images'>;
    primaryColor: Schema.Attribute.String & Schema.Attribute.Required;
    secondaryColor: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WebpageAppBlock extends Struct.ComponentSchema {
  collectionName: 'components_webpage_app_blocks';
  info: {
    description: '';
    displayName: 'AppBlock';
  };
  attributes: {
    cta: Schema.Attribute.Component<'webpage.cta', true>;
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['text', 'image']>;
  };
}

export interface WebpageAward extends Struct.ComponentSchema {
  collectionName: 'components_webpage_awards';
  info: {
    description: '';
    displayName: 'Award';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Component<'webpage.image', false>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WebpageButton extends Struct.ComponentSchema {
  collectionName: 'components_webpage_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    theme: Schema.Attribute.String;
    variant: Schema.Attribute.String;
  };
}

export interface WebpageCard extends Struct.ComponentSchema {
  collectionName: 'components_webpage_cards';
  info: {
    description: '';
    displayName: 'Card';
    icon: 'apps';
  };
  attributes: {
    CardDescription: Schema.Attribute.String;
    CardIcon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    CardImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    CardTitle: Schema.Attribute.String;
  };
}

export interface WebpageCardContainer extends Struct.ComponentSchema {
  collectionName: 'components_webpage_card_containers';
  info: {
    displayName: 'CardContainer';
    icon: 'apps';
  };
  attributes: {
    Card: Schema.Attribute.Component<'webpage.card', true>;
  };
}

export interface WebpageCardTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_webpage_card_testimonials';
  info: {
    displayName: 'CardTestimonial';
  };
  attributes: {
    age: Schema.Attribute.String;
    city: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    name: Schema.Attribute.String;
    specialty: Schema.Attribute.RichText;
  };
}

export interface WebpageCarousel extends Struct.ComponentSchema {
  collectionName: 'components_webpage_carousels';
  info: {
    displayName: 'Carousel';
  };
  attributes: {
    Images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface WebpageCta extends Struct.ComponentSchema {
  collectionName: 'components_webpage_ctas';
  info: {
    description: '';
    displayName: 'Cta';
  };
  attributes: {
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    theme: Schema.Attribute.String;
    value: Schema.Attribute.String;
    variant: Schema.Attribute.String;
  };
}

export interface WebpageFooter extends Struct.ComponentSchema {
  collectionName: 'components_webpage_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    awards: Schema.Attribute.Component<'webpage.award', true>;
    sitemap: Schema.Attribute.Component<'webpage.site-map', true>;
    social: Schema.Attribute.Component<'webpage.social-icon', true>;
    support: Schema.Attribute.Component<'webpage.support', true>;
  };
}

export interface WebpageHeader extends Struct.ComponentSchema {
  collectionName: 'components_webpage_headers';
  info: {
    description: '';
    displayName: 'Header';
    icon: 'earth';
  };
  attributes: {
    button: Schema.Attribute.Boolean;
    href: Schema.Attribute.String;
    name: Schema.Attribute.String;
    Subnav: Schema.Attribute.Component<'webpage.subnav', true>;
    target: Schema.Attribute.String;
  };
}

export interface WebpageHeaderSubtitle extends Struct.ComponentSchema {
  collectionName: 'components_webpage_header_subtitles';
  info: {
    displayName: 'Header Subtitle';
  };
  attributes: {
    subtitle: Schema.Attribute.RichText;
  };
}

export interface WebpageHeaderTitle extends Struct.ComponentSchema {
  collectionName: 'components_webpage_header_titles';
  info: {
    description: '';
    displayName: 'Header Title';
    icon: 'layout';
  };
  attributes: {
    title: Schema.Attribute.RichText;
  };
}

export interface WebpageImage extends Struct.ComponentSchema {
  collectionName: 'components_webpage_images';
  info: {
    description: '';
    displayName: 'Image';
    icon: 'landscape';
  };
  attributes: {
    className: Schema.Attribute.Text;
    height: Schema.Attribute.Decimal;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    width: Schema.Attribute.Decimal;
  };
}

export interface WebpageLink extends Struct.ComponentSchema {
  collectionName: 'components_webpage_links';
  info: {
    description: '';
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface WebpageOptions extends Struct.ComponentSchema {
  collectionName: 'components_webpage_options';
  info: {
    displayName: 'options';
  };
  attributes: {
    description: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface WebpageScore extends Struct.ComponentSchema {
  collectionName: 'components_webpage_scores';
  info: {
    description: '';
    displayName: 'Score';
  };
  attributes: {
    after: Schema.Attribute.String;
    before: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

export interface WebpageScoreBoard extends Struct.ComponentSchema {
  collectionName: 'components_webpage_score_boards';
  info: {
    description: '';
    displayName: 'ScoreBoard';
  };
  attributes: {
    disclaimer: Schema.Attribute.Text;
    score: Schema.Attribute.Component<'webpage.score', true>;
    title: Schema.Attribute.String;
  };
}

export interface WebpageSiteMap extends Struct.ComponentSchema {
  collectionName: 'components_webpage_site_maps';
  info: {
    description: '';
    displayName: 'SiteMap';
  };
  attributes: {
    options: Schema.Attribute.Component<'webpage.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface WebpageSocialIcon extends Struct.ComponentSchema {
  collectionName: 'components_webpage_social_icons';
  info: {
    displayName: 'socialIcon';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WebpageSubnav extends Struct.ComponentSchema {
  collectionName: 'components_webpage_subnavs';
  info: {
    description: '';
    displayName: 'Subnav';
    icon: 'apps';
  };
  attributes: {
    background: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    Options: Schema.Attribute.Component<'webpage.options', true>;
  };
}

export interface WebpageSupport extends Struct.ComponentSchema {
  collectionName: 'components_webpage_supports';
  info: {
    description: '';
    displayName: 'Support';
  };
  attributes: {
    options: Schema.Attribute.Component<'webpage.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface WebpageTitle extends Struct.ComponentSchema {
  collectionName: 'components_webpage_titles';
  info: {
    displayName: 'Title';
    icon: 'layer';
  };
  attributes: {
    HeroTitle: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'boe.login-data': BoeLoginData;
      'boe.navbar': BoeNavbar;
      'boe.table-data': BoeTableData;
      'navbar.nav-item': NavbarNavItem;
      'webpage.app-block': WebpageAppBlock;
      'webpage.award': WebpageAward;
      'webpage.button': WebpageButton;
      'webpage.card': WebpageCard;
      'webpage.card-container': WebpageCardContainer;
      'webpage.card-testimonial': WebpageCardTestimonial;
      'webpage.carousel': WebpageCarousel;
      'webpage.cta': WebpageCta;
      'webpage.footer': WebpageFooter;
      'webpage.header': WebpageHeader;
      'webpage.header-subtitle': WebpageHeaderSubtitle;
      'webpage.header-title': WebpageHeaderTitle;
      'webpage.image': WebpageImage;
      'webpage.link': WebpageLink;
      'webpage.options': WebpageOptions;
      'webpage.score': WebpageScore;
      'webpage.score-board': WebpageScoreBoard;
      'webpage.site-map': WebpageSiteMap;
      'webpage.social-icon': WebpageSocialIcon;
      'webpage.subnav': WebpageSubnav;
      'webpage.support': WebpageSupport;
      'webpage.title': WebpageTitle;
    }
  }
}
