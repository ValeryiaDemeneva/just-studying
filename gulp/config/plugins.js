import replace from "gulp-replace"; //
import plumber from "gulp-plumber"; //обработка ошибок
import notify from "gulp-notify"; //локальный сервер
import browsersync from "browser-sync"; //проверка обновления 
import newer from "gulp-newer";

export const plugins = {
   replace: replace,
   plumber: plumber,
   notify: notify,
   browsersync: browsersync,
   newer: newer
}