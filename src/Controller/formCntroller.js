const formModel = require("../Model/formModel");

exports.submitData = async (request, response) => {
    try {
        const body = request.body;
        const img = request.imagePath
        const data = {
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            dob: body.dob,
            residentialAddress: {
                street1: body.street1,
                street2: body.street2
            },
            permanentAddress: {
                street3: body.street3,
                street4: body.street4
            },
            document: {
                fileName: body.fileName,
                typeOfFile: body.typeOfFile,
                file: img
                
            }
        }

        const dbRes = await formModel.create(data)
        if (dbRes) {
            const img = request.imagePath
            response.status(200).json({
                status: "Success",
                message: "Form Submit successfully",
                data: dbRes
            })
        }

    }
    catch (error) {
        console.log(error);
        return response.status(500).json({
            status: "failed",
            message: "Failed to Submit form"
        })
    }
}