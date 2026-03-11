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

export interface LabsColorTagPicker extends Struct.ComponentSchema {
  collectionName: 'components_labs_color_tag_pickers';
  info: {
    displayName: 'ColorTagPicker';
  };
  attributes: {
    ColorTagPicker: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface LabsLabsAccess extends Struct.ComponentSchema {
  collectionName: 'components_labs_labs_accesses';
  info: {
    displayName: 'LabsAccess';
  };
  attributes: {
    AccessButtonText: Schema.Attribute.String;
    AccessCodeTitle: Schema.Attribute.String;
    AccessOptions: Schema.Attribute.Text;
    AccessSubtitle: Schema.Attribute.String;
    AccessSupportLink: Schema.Attribute.RichText;
    AccessTitle: Schema.Attribute.String;
  };
}

export interface LabsLabsCard extends Struct.ComponentSchema {
  collectionName: 'components_labs_labs_cards';
  info: {
    description: '';
    displayName: 'LabsCard';
    icon: 'doctor';
  };
  attributes: {
    CardDescription: Schema.Attribute.Text;
    CardTag: Schema.Attribute.Component<'labs.labs-tag', false>;
    CardTitle: Schema.Attribute.String;
    ImageLabsCard: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface LabsLabsCode extends Struct.ComponentSchema {
  collectionName: 'components_labs_labs_codes';
  info: {
    description: '';
    displayName: 'LabsCode';
  };
  attributes: {
    LabsCodeInput: Schema.Attribute.String;
  };
}

export interface LabsLabsExperimentDetails extends Struct.ComponentSchema {
  collectionName: 'components_labs_labs_experiment_details';
  info: {
    description: '';
    displayName: 'LabsExperimentDetails';
    icon: 'wheelchair';
  };
  attributes: {
    LabsDetailsButtonLink: Schema.Attribute.String;
    LabsDetailsButtonText: Schema.Attribute.String;
    LabsDetailsCover: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    LabsDetailsDescription: Schema.Attribute.Text;
    LabsDetailsHowTest: Schema.Attribute.String;
    LabsDetailsHowTestItems: Schema.Attribute.Blocks;
    LabsDetailsItems: Schema.Attribute.Blocks;
    LabsDetailsTag: Schema.Attribute.Component<'labs.labs-tag', true>;
    LabsDetailsTime: Schema.Attribute.String;
    LabsDetailsTimeIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    LabsDetailsTitle: Schema.Attribute.String;
    LabsDetailsTitleFooter: Schema.Attribute.String;
    LabsDetailsType: Schema.Attribute.String;
    slug: Schema.Attribute.String;
  };
}

export interface LabsLabsTag extends Struct.ComponentSchema {
  collectionName: 'components_labs_labs_tags';
  info: {
    description: '';
    displayName: 'LabsTag';
    icon: 'book';
  };
  attributes: {
    ColorTagPicker: Schema.Attribute.Component<'labs.color-tag-picker', false>;
    label: Schema.Attribute.String;
    shortLabel: Schema.Attribute.String;
    TagIcon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LabsMainSection extends Struct.ComponentSchema {
  collectionName: 'components_labs_main_sections';
  info: {
    description: '';
    displayName: 'MainSection';
    icon: 'bulletList';
  };
  attributes: {
    iconlabs: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    LabsDescription: Schema.Attribute.Text;
    LabsName: Schema.Attribute.String;
    WelcomeTitle: Schema.Attribute.String;
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
    primaryColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    secondaryColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PwaAccount extends Struct.ComponentSchema {
  collectionName: 'components_pwa_accounts';
  info: {
    description: '';
    displayName: 'account';
    icon: 'layout';
  };
  attributes: {
    avatarColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    chevronMenu: Schema.Attribute.Component<'pwa.chevron-menu', false>;
    dangerOption: Schema.Attribute.Component<'pwa.option', false>;
    defaultOption: Schema.Attribute.Component<'pwa.option', false>;
    faqs: Schema.Attribute.Component<'pwa.faqs-ui', false>;
    header: Schema.Attribute.Component<'pwa.header', false>;
    identityConfirmationImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    support: Schema.Attribute.Component<'pwa.support', false>;
    titleColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    userNameColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    userSupport: Schema.Attribute.Component<'pwa.user-support', false>;
    wallet: Schema.Attribute.Component<'pwa.wallet', false>;
  };
}

export interface PwaAlert extends Struct.ComponentSchema {
  collectionName: 'components_pwa_alerts';
  info: {
    displayName: 'alert';
    icon: 'layout';
  };
  attributes: {
    bgColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    boldTextColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    iconColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    textColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaArticleCard extends Struct.ComponentSchema {
  collectionName: 'components_pwa_article_cards';
  info: {
    displayName: 'articleCard';
    icon: 'layout';
  };
  attributes: {
    color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    dateColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    tag: Schema.Attribute.Component<'pwa.button', false>;
    timeColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    titleColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaAttachAdvice extends Struct.ComponentSchema {
  collectionName: 'components_pwa_attach_advices';
  info: {
    displayName: 'attachAdvice';
    icon: 'layout';
  };
  attributes: {
    bgColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    iconColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    textColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaAttachButton extends Struct.ComponentSchema {
  collectionName: 'components_pwa_attach_buttons';
  info: {
    displayName: 'attachButton';
    icon: 'layout';
  };
  attributes: {
    bgColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    borderColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    iconColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    textColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaBoxButton extends Struct.ComponentSchema {
  collectionName: 'components_pwa_box_buttons';
  info: {
    displayName: 'boxButton';
    icon: 'layout';
  };
  attributes: {
    bgColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    iconLeftColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    iconRightColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    labelColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    valueColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaButton extends Struct.ComponentSchema {
  collectionName: 'components_pwa_buttons';
  info: {
    description: '';
    displayName: 'button';
  };
  attributes: {
    color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    iconColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    textColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaChevronMenu extends Struct.ComponentSchema {
  collectionName: 'components_pwa_chevron_menus';
  info: {
    displayName: 'chevronMenu';
    icon: 'layout';
  };
  attributes: {
    option: Schema.Attribute.Component<'pwa.option', false>;
    titleColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaCleanButton extends Struct.ComponentSchema {
  collectionName: 'components_pwa_clean_buttons';
  info: {
    displayName: 'cleanButton';
    icon: 'layout';
  };
  attributes: {
    color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    textColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaDataCard extends Struct.ComponentSchema {
  collectionName: 'components_pwa_data_cards';
  info: {
    displayName: 'dataCard';
    icon: 'layout';
  };
  attributes: {
    bgColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    labelColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    valueColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaDayPill extends Struct.ComponentSchema {
  collectionName: 'components_pwa_day_pills';
  info: {
    displayName: 'dayPill';
    icon: 'layout';
  };
  attributes: {
    bgColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    textColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaEmergency extends Struct.ComponentSchema {
  collectionName: 'components_pwa_emergencies';
  info: {
    displayName: 'emergency';
    icon: 'layout';
  };
  attributes: {
    button: Schema.Attribute.Component<'pwa.clean-button', false>;
    footerTextColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    header: Schema.Attribute.Component<'pwa.header', false>;
    headingColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    item: Schema.Attribute.Component<'pwa.item', false>;
    subheadingColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaFaqs extends Struct.ComponentSchema {
  collectionName: 'components_pwa_faqs';
  info: {
    displayName: 'faqs';
  };
  attributes: {
    content: Schema.Attribute.Text;
    faq_id: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface PwaFaqsUi extends Struct.ComponentSchema {
  collectionName: 'components_pwa_faqs_uis';
  info: {
    displayName: 'faqsUi';
    icon: 'layout';
  };
  attributes: {
    button: Schema.Attribute.Component<'pwa.button', false>;
    footerTextColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    footerTitleColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    option: Schema.Attribute.Component<'pwa.option', false>;
    textColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    titleColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaFeelingBad extends Struct.ComponentSchema {
  collectionName: 'components_pwa_feeling_bads';
  info: {
    description: '';
    displayName: 'feelingBad';
    icon: 'layout';
  };
  attributes: {
    header: Schema.Attribute.Component<'pwa.header-with-image', false>;
    option: Schema.Attribute.Component<'pwa.option', false>;
    titleColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaFlowStep extends Struct.ComponentSchema {
  collectionName: 'components_pwa_flow_steps';
  info: {
    displayName: 'FlowStep';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    key: Schema.Attribute.Enumeration<
      ['intro', 'symptoms', 'reason', 'documents', 'schedule', 'confirm']
    >;
    title: Schema.Attribute.String;
  };
}

export interface PwaHeader extends Struct.ComponentSchema {
  collectionName: 'components_pwa_headers';
  info: {
    displayName: 'header';
    icon: 'layout';
  };
  attributes: {
    bgColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    button: Schema.Attribute.Component<'pwa.button', false>;
    textColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaHeaderWithImage extends Struct.ComponentSchema {
  collectionName: 'components_pwa_header_with_images';
  info: {
    displayName: 'headerWithImage';
    icon: 'layout';
  };
  attributes: {
    bgColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    button: Schema.Attribute.Component<'pwa.button', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    textColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaHome extends Struct.ComponentSchema {
  collectionName: 'components_pwa_homes';
  info: {
    description: '';
    displayName: 'home';
    icon: 'layout';
  };
  attributes: {
    articleCard: Schema.Attribute.Component<'pwa.article-card', false>;
    bgColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    emergencyButton: Schema.Attribute.Component<'pwa.button', false>;
    headingColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    meetingCard: Schema.Attribute.Component<'pwa.meeting-card', false>;
    schedulingCard: Schema.Attribute.Component<'pwa.scheduling-card', false>;
    sectionTitleColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    serviceCardOne: Schema.Attribute.Component<'pwa.service-card', false>;
    serviceCardTwo: Schema.Attribute.Component<'pwa.service-card', false>;
    subheadingColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaInput extends Struct.ComponentSchema {
  collectionName: 'components_pwa_inputs';
  info: {
    displayName: 'input';
  };
  attributes: {
    color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    endContentColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    helperColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    iconColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    labelColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    placeholderColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    textColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaInterview extends Struct.ComponentSchema {
  collectionName: 'components_pwa_interviews';
  info: {
    description: '';
    displayName: 'interview';
    icon: 'layout';
  };
  attributes: {
    activeDayPill: Schema.Attribute.Component<'pwa.day-pill', false>;
    attachAdvice: Schema.Attribute.Component<'pwa.attach-advice', false>;
    attachButton: Schema.Attribute.Component<'pwa.attach-button', false>;
    bookingActive: Schema.Attribute.Component<'pwa.box-button', false>;
    bookingDefault: Schema.Attribute.Component<'pwa.box-button', false>;
    buttonActive: Schema.Attribute.Component<'pwa.button', false>;
    buttonDefault: Schema.Attribute.Component<'pwa.button', false>;
    checkboxGroupActive: Schema.Attribute.Component<'pwa.input', false>;
    checkboxGroupDefault: Schema.Attribute.Component<'pwa.input', false>;
    defaultDayPill: Schema.Attribute.Component<'pwa.day-pill', false>;
    inputDefault: Schema.Attribute.Component<'pwa.input', false>;
    inputFocus: Schema.Attribute.Component<'pwa.input', false>;
    methodActive: Schema.Attribute.Component<'pwa.box-button', false>;
    methodDefault: Schema.Attribute.Component<'pwa.box-button', false>;
    radioGroupActive: Schema.Attribute.Component<'pwa.input', false>;
    radioGroupDefault: Schema.Attribute.Component<'pwa.input', false>;
    slider: Schema.Attribute.Component<'pwa.input', false>;
    uploadFile: Schema.Attribute.Component<'pwa.upload-file', false>;
  };
}

export interface PwaInterviewWorkflow extends Struct.ComponentSchema {
  collectionName: 'components_pwa_interview_workflows';
  info: {
    displayName: 'interviewWorkflow';
    icon: 'layout';
  };
  attributes: {
    header: Schema.Attribute.Component<'pwa.header', false>;
  };
}

export interface PwaItem extends Struct.ComponentSchema {
  collectionName: 'components_pwa_items';
  info: {
    displayName: 'item';
    icon: 'layout';
  };
  attributes: {
    descriptionColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    iconBgColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    iconColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    labelColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaMeeting extends Struct.ComponentSchema {
  collectionName: 'components_pwa_meetings';
  info: {
    displayName: 'meeting';
    icon: 'layout';
  };
  attributes: {
    cardBorderColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    cardIconColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    cardLabelColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    cardValueColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    headerBgColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    professionalCardIconColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    professionalCardLabelColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    professionalCardValueColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaMeetingCard extends Struct.ComponentSchema {
  collectionName: 'components_pwa_meeting_cards';
  info: {
    displayName: 'meetingCard';
    icon: 'layout';
  };
  attributes: {
    bgColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    button: Schema.Attribute.Component<'pwa.button', false>;
    dateColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    textColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    titleColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaMenu extends Struct.ComponentSchema {
  collectionName: 'components_pwa_menus';
  info: {
    displayName: 'menu';
    icon: 'layout';
  };
  attributes: {
    bgColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    buttonColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    headingColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    optionBorderColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    optionColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaMyHealth extends Struct.ComponentSchema {
  collectionName: 'components_pwa_my_healths';
  info: {
    description: '';
    displayName: 'myHealth';
    icon: 'layout';
  };
  attributes: {
    avatarColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    dataCard: Schema.Attribute.Component<'pwa.data-card', false>;
    dataColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    editButton: Schema.Attribute.Component<'pwa.button', false>;
    header: Schema.Attribute.Component<'pwa.header', false>;
    riskCard: Schema.Attribute.Component<'pwa.risk-card', false>;
    sectionTitleColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    usernameColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaOption extends Struct.ComponentSchema {
  collectionName: 'components_pwa_options';
  info: {
    displayName: 'option';
    icon: 'layout';
  };
  attributes: {
    iconLeftColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    iconRightColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    labelColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    valueColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaRiskCard extends Struct.ComponentSchema {
  collectionName: 'components_pwa_risk_cards';
  info: {
    displayName: 'riskCard';
    icon: 'layout';
  };
  attributes: {
    iconLeftColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    labelColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    negativeValueColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    positiveValueColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaSchedulingCard extends Struct.ComponentSchema {
  collectionName: 'components_pwa_scheduling_cards';
  info: {
    displayName: 'schedulingCard';
    icon: 'layout';
  };
  attributes: {
    button: Schema.Attribute.Component<'pwa.button', false>;
    color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    textColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    titleColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_pwa_service_cards';
  info: {
    description: '';
    displayName: 'serviceCard';
    icon: 'layout';
  };
  attributes: {
    color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    textColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    titleColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaSideNavItem extends Struct.ComponentSchema {
  collectionName: 'components_pwa_side_nav_items';
  info: {
    displayName: 'side_nav_item';
    icon: 'bulletList';
  };
  attributes: {
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    item_text: Schema.Attribute.String;
    redirect: Schema.Attribute.String;
  };
}

export interface PwaSplash extends Struct.ComponentSchema {
  collectionName: 'components_pwa_splashes';
  info: {
    description: '';
    displayName: 'splash';
    icon: 'layout';
  };
  attributes: {
    bgColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    button: Schema.Attribute.Component<'pwa.button', false>;
    footerColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    headingColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    subheadingColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    textColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaSupport extends Struct.ComponentSchema {
  collectionName: 'components_pwa_supports';
  info: {
    displayName: 'support';
    icon: 'layout';
  };
  attributes: {
    option: Schema.Attribute.Component<'pwa.option', false>;
    titleColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaTermsContent extends Struct.ComponentSchema {
  collectionName: 'components_pwa_terms_contents';
  info: {
    description: '';
    displayName: 'TermsContent';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PwaTermsDefinitions extends Struct.ComponentSchema {
  collectionName: 'components_pwa_terms_definitions';
  info: {
    displayName: 'TermsDefinitions';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface PwaTermsUiText extends Struct.ComponentSchema {
  collectionName: 'components_pwa_terms_ui_texts';
  info: {
    description: '';
    displayName: 'TermsUiText';
  };
  attributes: {
    description: Schema.Attribute.RichText;
  };
}

export interface PwaUploadFile extends Struct.ComponentSchema {
  collectionName: 'components_pwa_upload_files';
  info: {
    displayName: 'uploadFile';
    icon: 'layout';
  };
  attributes: {
    bgColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    borderColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    footerColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    iconColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    textColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    titleColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaUserSupport extends Struct.ComponentSchema {
  collectionName: 'components_pwa_user_supports';
  info: {
    displayName: 'userSupport';
    icon: 'layout';
  };
  attributes: {
    button: Schema.Attribute.Component<'pwa.button', false>;
    greetingColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    textColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    titleColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaWallet extends Struct.ComponentSchema {
  collectionName: 'components_pwa_wallets';
  info: {
    displayName: 'wallet';
    icon: 'layout';
  };
  attributes: {
    boxBgColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    boxTextColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    primaryIconColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    secondaryIconColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    termsTextColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    termsTitleColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    titleColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaWarningModal extends Struct.ComponentSchema {
  collectionName: 'components_pwa_warning_modals';
  info: {
    displayName: 'warningModal';
    icon: 'layout';
  };
  attributes: {
    descriptionColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    iconColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    subtitleColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    titleColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PwaWizard extends Struct.ComponentSchema {
  collectionName: 'components_pwa_wizards';
  info: {
    description: '';
    displayName: 'wizard';
    icon: 'layout';
  };
  attributes: {
    emergencyAlert: Schema.Attribute.Component<'pwa.alert', false>;
    headingColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    instructionDescriptionColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    instructionProgressbarColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    instructionTitleColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    nextButton: Schema.Attribute.Component<'pwa.button', false>;
    prevButton: Schema.Attribute.Component<'pwa.button', false>;
    progressbarColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    questionColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    spinnerColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    subheadingColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    successIcon: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    termsColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    textColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
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
    description: '';
    displayName: 'CardTestimonial';
  };
  attributes: {
    age: Schema.Attribute.String;
    background: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    city: Schema.Attribute.String;
    color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
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

export interface WebpageCertificates extends Struct.ComponentSchema {
  collectionName: 'components_webpage_certificates';
  info: {
    description: '';
    displayName: 'Certificates';
  };
  attributes: {
    image: Schema.Attribute.Component<'webpage.image', true>;
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
    href: Schema.Attribute.String;
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
    background: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
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
      'labs.color-tag-picker': LabsColorTagPicker;
      'labs.labs-access': LabsLabsAccess;
      'labs.labs-card': LabsLabsCard;
      'labs.labs-code': LabsLabsCode;
      'labs.labs-experiment-details': LabsLabsExperimentDetails;
      'labs.labs-tag': LabsLabsTag;
      'labs.main-section': LabsMainSection;
      'navbar.nav-item': NavbarNavItem;
      'pwa.account': PwaAccount;
      'pwa.alert': PwaAlert;
      'pwa.article-card': PwaArticleCard;
      'pwa.attach-advice': PwaAttachAdvice;
      'pwa.attach-button': PwaAttachButton;
      'pwa.box-button': PwaBoxButton;
      'pwa.button': PwaButton;
      'pwa.chevron-menu': PwaChevronMenu;
      'pwa.clean-button': PwaCleanButton;
      'pwa.data-card': PwaDataCard;
      'pwa.day-pill': PwaDayPill;
      'pwa.emergency': PwaEmergency;
      'pwa.faqs': PwaFaqs;
      'pwa.faqs-ui': PwaFaqsUi;
      'pwa.feeling-bad': PwaFeelingBad;
      'pwa.flow-step': PwaFlowStep;
      'pwa.header': PwaHeader;
      'pwa.header-with-image': PwaHeaderWithImage;
      'pwa.home': PwaHome;
      'pwa.input': PwaInput;
      'pwa.interview': PwaInterview;
      'pwa.interview-workflow': PwaInterviewWorkflow;
      'pwa.item': PwaItem;
      'pwa.meeting': PwaMeeting;
      'pwa.meeting-card': PwaMeetingCard;
      'pwa.menu': PwaMenu;
      'pwa.my-health': PwaMyHealth;
      'pwa.option': PwaOption;
      'pwa.risk-card': PwaRiskCard;
      'pwa.scheduling-card': PwaSchedulingCard;
      'pwa.service-card': PwaServiceCard;
      'pwa.side-nav-item': PwaSideNavItem;
      'pwa.splash': PwaSplash;
      'pwa.support': PwaSupport;
      'pwa.terms-content': PwaTermsContent;
      'pwa.terms-definitions': PwaTermsDefinitions;
      'pwa.terms-ui-text': PwaTermsUiText;
      'pwa.upload-file': PwaUploadFile;
      'pwa.user-support': PwaUserSupport;
      'pwa.wallet': PwaWallet;
      'pwa.warning-modal': PwaWarningModal;
      'pwa.wizard': PwaWizard;
      'webpage.app-block': WebpageAppBlock;
      'webpage.award': WebpageAward;
      'webpage.button': WebpageButton;
      'webpage.card': WebpageCard;
      'webpage.card-container': WebpageCardContainer;
      'webpage.card-testimonial': WebpageCardTestimonial;
      'webpage.carousel': WebpageCarousel;
      'webpage.certificates': WebpageCertificates;
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
