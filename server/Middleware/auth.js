export function localVariables(req, res, next){
    req.app.local = {
        OTP: null,
        resetSession: false
    }
    next()
}