"use strict";

module.exports = (app) => {
  // Common route
  require("./common.routes")(app);

  // Role route
  require("./role.routes")(app);

  // Skills route
  require("./skills.routes")(app);
  // Skills route
  require("./city.routes")(app);
  // Skills route
  require("./state.routes")(app);

  // Company route
  require("./company.routes")(app);

  // User route
  require("./user.routes")(app);

  //frontend user
  require("./frontend/frontend.user.routes")(app);

  //frontend employer
  require("./frontend/employer.routes")(app);

  //frontend employer
  require("./frontend/candidate.routes")(app);

  //settings
  require("./settings.routes")(app);

  //cms
  require("./cms.routes")(app);

  //faq
  require("./faqs.routes")(app);

  // Candidate route
  require("./candidate.routes")(app);

  // Employer route
  require("./employer.routes")(app);

  // Candidate route
  require("./candidte_package.routes")(app);

  // Employer route
  require("./employer_package.routes")(app);

  // subscription packages route
  require("./frontend/subscription_packages.route")(app);

  // frontend faqs route
  require("./frontend/faqs.routes")(app);

  require("./frontend/cms.routes")(app);

  //payment routes
  require("./frontend/payment.routes")(app);
};
