//##############################################################################
// This Object includes all the ENGLISH text in the Application
//##############################################################################

const englishTexts = {

  // login page
  loginPageTitle: "Login Page",
  loginPageButton: "Login",
  loginPageEmailPlaceHolder: "Email",
  loginPagePasswordPlaceHolder: "Password",
  loginPageLinkText: "Register",

  // register page
  registerPageTitle: "Fill the form for sign up",
  registerPageLink: "Login Page",
  registerPageFirstNamePlaceHolder: "First Name",
  registerPageLastNamePlaceHolder: "Last Name",
  registerPageEmailPlaceHolder: "Email",
  registerPagePhoneNumberPlaceHolder: "Phone Number",
  registerPagePasswordPlaceHolder: "Password",
  registerPageRePasswordPlaceHolder: "Repeat Password",
  registerPageImagePlaceHolder: "Please Upload An Avatar",
  registerPageButton: "Sign Up",

  // Admin side bar
  adminSidebarProfile: "Profile",

  //User side bar
  userSidebarProfile: "Profile",

};

//##############################################################################
// This Object includes all the FARSI text in the Application
//##############################################################################

const farsiTexts = {

  // login page
  loginPageTitle: "صفحه ورود",
  loginPageButton: "ورود",
  loginPageEmailPlaceHolder: "ایمیل",
  loginPagePasswordPlaceHolder: "رمز عبور",
  loginPageLinkText: "ثبت نام",

  // register page
  registerPageTitle: "فرم زیر را تکمیل کنید",
  registerPageLink: "ورود",
  registerPageFirstNamePlaceHolder: "نام",
  registerPageLastNamePlaceHolder: "نام خانوادگی",
  registerPageEmailPlaceHolder: "ایمیل",
  registerPagePhoneNumberPlaceHolder: "شماره تماس",
  registerPagePasswordPlaceHolder: "رمز",
  registerPageRePasswordPlaceHolder: "تکرار رمز",
  registerPageImagePlaceHolder: "عکس پروفایل خود را وارد کنید",
  registerPageButton: "ثبت نام",

  // Admin side bar
  adminSidebarProfile: "اطلاعات کاربری",

  //User side bar
  userSidebarProfile: "اطلاعات کاربری",

};


//##############################################################################
// export
//##############################################################################

export const strings = {
  EN: { isRTL: false, language: "ENGLISH", texts: englishTexts },
  FA: { isRTL: true, language: "FARSI", texts: farsiTexts }
};
