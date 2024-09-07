export enum BadRequestMesage {
    InValidData = 'اطلاعات وارد شده صحیح نمی باشند ',
    EmailFormatIncorrect = 'ایمیل وارد شده معتبر نمی باشد',
    MobileNumberIncorrect = 'شماره موبایل وارد شده معتبر نمی باشد',
    RegisterMethodIncorrect = 'باید از طریق ایمیل یا شماره موبایل ثبت نام کنید',
    SaveOtp = 'کد قبلا ارسال شده است ، لطفا بعد از 2 دقیقه مجددا تلاش کنید ',
    CategoryIncorrect = 'دسته بندی مورد نظر ثبت نشده است .  لطفا آن را ثبت کنید',
    ExistEmail = 'ایمیلی برای این نام کاربری وجود دارد',
    ExistPhone = 'شماره موبایلی برای این نام کاربری وجود دارد',
    InvalidUuid = 'آیدی دسته بندی وارد شده  معتبر نمی باشد',
}

export enum AuthMessage {
   LoginSuccess = 'ورود با موفقیت انجام شد',
   RegisterSuccess = 'ثبت نام با موفقیت انجام شد',
   NotFoundAccount = 'یوزری با این مشخصات یافت نشد ',
   AlreadyExistAccount = 'یوزری با این مشخصات قبلا ثبت شده است',
   ExpiredOtp = 'کد ارسالی منقضی شده است ، لطفا مجددا تلاش کنید',
   OtpCodeIncorrect = 'کد وارد شده اشتباه است ، لطفا مجددا تلاش کنید',
   LoginAgain = 'لطفا مجددا وارد شوید '
}

export enum NotFoundMessages {
    CategoriesNotFound = 'دسته بندی ای موجود نمیباشد',
    CategoryNotFound = 'دسته بندی مورد نظر یافت نشد',
    UserNotFound = 'کاربر مورد نظر یافت نشد',
    ImageNotFound = 'در دریافت تصویر مشکلی پیش آمده است ٬ لطفا به پشتیبانی پیام دهید',
}

export enum ConflictMessages {
   EmailConflict = 'این ایمیل قبلا ثبت شده است',
   UserConflict = 'این نام کاربری قبلا ثبت شده است',
   CategoryConflict = 'این دسته بندی قبلا ثبت شده است',
   PhoneConflict = 'این شماره موبایل قبلا ثبت شده است',
}

export enum PublicMessage
{
   SendOtpSuccess = 'کد تایید با موفقیت ارسال شد',
   LoginSucces = 'ورود با موفقیت انجام شد',
   DeleteSuccess = ' با موفقیت پاک شد',
   UpdateSuccess = 'با موفقیت آپدیت شد',
   EmailUpdated = 'ایمیل با موفقیت تغییر یافت',
   SendEmailSuccess = 'کد تایید با موفقیت به ایمیل شما ارسال شد',
   Error = 'لطفا مجددا امتحان کنید ',
   CreateSuccess = 'با موفقیت ایجاد شد',
   SystemError = 'سیستم به مشکل خورده است . لطفا بعدا تلاش کنید',
   AlreadyVerified = 'قبلا تایید شده است',
   AddEmailSuccess='ایمیل با موفقیت ثبت شد',
   AddPhoneSuccess='شماره موبایل با موفقیت ثبت شد',
   UploadSuccess = 'با موفقیت اپلود شد',
   UploadeError = 'لطفا مجددا امتحان نمایید',

}

export enum ValidationMessage
{
   InvalidImageFormat = 'فرمت تصاویر باید .png یا .jpg یا .jpeg باشد .'
}

export enum ServiceUnavailableMessage
{
   SmsServiceUnavailable = 'سرویس ارسال پیامک در درسترس نمیباشد . مجددا امتحان نمایید ',
   MailServiceUnavailable = '.سرویس ارسال ایمیل در دسترس نمیباشد . لطفا مجددا امتحان نمایید',
   UploadeServiceUnavailable = 'لطفا مجددا امتحان نمایید',
}

export enum ForbiddenMessage
{
   RoleAcces = 'شما به این بخش دسترسی ندارید',
}