const base = require('@playwright/test')

exports.customTest = base.test.extend(
    {
        dataForContactUs : {
            firstName : "Kanvi",
            lastName  : "Rathore",
            email     : "kanvirathore56@gmail.com",
            message   : "Childhood Memory"
        }
    }
)