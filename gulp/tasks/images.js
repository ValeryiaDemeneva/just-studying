import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

/*export const images = () => {
  return app.gulp.src(app.path.src.images)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "IMAGES",
        message: "Error: <%= error.message %>"
      }))
    )
    .pipe(app.plugins.newer(app.path.build.images))

    // Конвертация изображений в формат WebP
    .pipe(webp())
    .pipe(app.gulp.dest(app.path.build.images)) // Конвертированные изображения в WebP

    .pipe(app.gulp.src(app.path.src.images)) // Важно: Используйте новый поток для последующих операций
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      interlaced: true,
      optimizationLevel: 3 // от 0 до 7
    }))
    .pipe(app.gulp.dest(app.path.build.images)) // Оптимизированные изображения

    .pipe(app.gulp.src(app.path.src.svg)) // Копирование SVG файлов
    .pipe(app.gulp.dest(app.path.build.images))

    // Обновление браузера
    .pipe(app.plugins.browsersync.stream());
}*/