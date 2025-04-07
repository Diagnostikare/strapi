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

export interface WebpageHeader extends Struct.ComponentSchema {
  collectionName: 'components_webpage_headers';
  info: {
    displayName: 'Header';
    icon: 'earth';
  };
  attributes: {
    href: Schema.Attribute.String;
    name: Schema.Attribute.String;
    Subnav: Schema.Attribute.Component<'webpage.subnav', true>;
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
    Options: Schema.Attribute.Component<'webpage.options', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'boe.login-data': BoeLoginData;
      'boe.navbar': BoeNavbar;
      'boe.table-data': BoeTableData;
      'webpage.header': WebpageHeader;
      'webpage.options': WebpageOptions;
      'webpage.subnav': WebpageSubnav;
    }
  }
}
