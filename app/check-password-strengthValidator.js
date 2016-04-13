System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CheckPasswordStrengthValidator;
    return {
        setters:[],
        execute: function() {
            CheckPasswordStrengthValidator = (function () {
                function CheckPasswordStrengthValidator() {
                }
                CheckPasswordStrengthValidator.checkPassStrength = function (control) {
                    var score = scorePassword(control.value);
                    if (score > 60)
                        return {
                            weakPassword: true,
                            score: score,
                            scoreName: "Good"
                        };
                    if (score >= 30)
                        return {
                            weakPassword: true,
                            score: score,
                            scoreName: "Weak"
                        };
                    return null;
                };
                CheckPasswordStrengthValidator.prototype.scorePassword = function (pass) {
                    var score = 0;
                    if (!pass)
                        return score;
                    // award every unique letter until 5 repetitions
                    var letters = new Object();
                    for (var i = 0; i < pass.length; i++) {
                        letters[pass[i]] = (letters[pass[i]] || 0) + 1;
                        score += 5.0 / letters[pass[i]];
                    }
                    // bonus points for mixing it up
                    var variations = {
                        digits: /\d/.test(pass),
                        lower: /[a-z]/.test(pass),
                        upper: /[A-Z]/.test(pass),
                        nonWords: /\W/.test(pass),
                    };
                    variationCount = 0;
                    for (var check in variations) {
                        variationCount += (variations[check] == true) ? 1 : 0;
                    }
                    score += (variationCount - 1) * 10;
                    return parseInt(score);
                };
                return CheckPasswordStrengthValidator;
            }());
            exports_1("CheckPasswordStrengthValidator", CheckPasswordStrengthValidator);
        }
    }
});
//# sourceMappingURL=check-password-strengthValidator.js.map