'use strict';

/**
 * theme controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

const headerPopulate = {
  populate: {
    button: true,
  },
};

const headerWithImagePopulate = {
  populate: {
    button: true,
    image: true,
  },
};

const interviewWorkflowPopulate = {
  populate: {
    header: headerPopulate,
  },
};

const THEME_POPULATE = {
  logo: true,
  logoMobile: true,
  sites: true,
  primaryButton: true,
  secondaryButton: true,
  tertiaryButton: true,
  ctaButton: true,
  outlineButton: true,
  dangerButton: true,
  disabledButton: true,
  defaultPillButton: true,
  selectedPillButton: true,
  link: true,
  defaultInput: true,
  focusInput: true,
  errorInput: true,
  disabledInput: true,
  menu: true,
  meeting: true,
  warningModal: true,
  cancellationInterview: true,
  header: headerPopulate,
  splash: {
    populate: {
      button: true,
    },
  },
  wizard: {
    populate: {
      nextButton: true,
      prevButton: true,
      emergencyAlert: true,
    },
  },
  home: {
    populate: {
      serviceCardOne: {
        populate: { image: true },
      },
      serviceCardTwo: {
        populate: { image: true },
      },
      emergencyButton: true,
      schedulingCard: {
        populate: { button: true },
      },
      articleCard: {
        populate: { tag: true },
      },
      meetingCard: {
        populate: { button: true },
      },
    },
  },
  account: {
    populate: {
      defaultOption: true,
      dangerOption: true,
      wallet: true,
      support: true,
      faqs: true,
      userSupport: true,
      chevronMenu: true,
      identityConfirmationImage: true,
      header: headerPopulate,
    },
  },
  feelingBad: {
    populate: {
      option: true,
      header: headerWithImagePopulate,
    },
  },
  interview: {
    populate: {
      inputDefault: true,
      inputFocus: true,
      radioGroupDefault: true,
      radioGroupActive: true,
      slider: true,
      checkboxGroupDefault: true,
      checkboxGroupActive: true,
      methodDefault: true,
      methodActive: true,
      bookingDefault: true,
      bookingActive: true,
      buttonDefault: true,
      buttonActive: true,
      uploadFile: true,
      attachButton: true,
      attachAdvice: true,
      defaultDayPill: true,
      activeDayPill: true,
      scheduled: true,
    },
  },
  myHealth: {
    populate: {
      header: headerPopulate,
      editButton: true,
      dataCard: true,
      riskCard: true,
    },
  },
  emergency: {
    populate: {
      item: true,
      button: true,
      header: headerPopulate,
    },
  },
  laboratory: interviewWorkflowPopulate,
  generalMedicine: interviewWorkflowPopulate,
  improveHealth: interviewWorkflowPopulate,
  psychology: interviewWorkflowPopulate,
  contact: interviewWorkflowPopulate,
  reschedule: interviewWorkflowPopulate,
  meetingCancellation: interviewWorkflowPopulate,
  errorPage: {
    populate: {
      primaryButton: true,
      secondaryButton: true,
      header: headerPopulate,
    },
  },
  nutrition: {
    populate: {
      header: headerPopulate,
      wizardNextButton: true,
      wizardPrevButton: true,
    },
  },
  pediatric: {
    populate: {
      header: headerPopulate,
      input: true,
      defaultPillButton: true,
      selectedPillButton: true,
    },
  },
};

module.exports = createCoreController('api::theme.theme', ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.documents('api::theme.theme').findOne({
      documentId: id,
      populate: THEME_POPULATE,
    });

    if (!entity) {
      return ctx.notFound();
    }

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },
}));
