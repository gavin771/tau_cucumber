class Login {
  get url() {
    return "?controller=authentication";
  }

  get emailInput() {
    return $("#email");
  }

  get passwordInput() {
    return $("#passwd");
  }

  get signInButton() {
    return $("#SubmitLogin");
  }

  get errorMessage() {
    return $(".alert.alert-danger > ol");
  }

  /**
   * Signs in
   *
   * @param {String} email - Email
   * @param {String} password - Button
   */
  signIn(email, password) {
    this.emailInput.waitForDisplayed(5000);
    this.emailInput.setValue(email);
    this.passwordInput.setValue(password);
    this.signInButton.click();
  }
}

module.exports = new Login();
