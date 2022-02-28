<img align="right" src="./title.gif" alt="Кибер Сатино" width="200">

# 

Веб-карта, вдохновлённая мотивами киберпанка и GTA Vice City, изображает окрестности [Сатинского учебно-научного полигона](http://www.geogr.msu.ru/practics/stations/satin/), примечательного прежде всего тем, что ежегодно студенты первого курса географического факультета МГУ имени М. В. Ломоносова проходят там практику. Полигон расположен в Боровском районе Калужской области.

## Исходные данные

Исходным материалом для карты послужила база данных "ГИС Сатино", доступная [здесь](https://aentin.github.io/qgis-course/map-design-quaternary.html) в виде приложения к упражнению. Из формата базы геоданных ESRI необходимые слои, были конвертированы в Geopackage для первичного оформления карты и далее через GeoJSON (из-за особенностей использовуемого программного обеспечения) в векторные тайлы.

## Программное обеспечение

Для создания карты использовалось только открытое (open-source) программное обеспечение: [QGIS 3](https://github.com/qgis/QGIS) (для подготовки исходных данных), [Tegola](https://github.com/go-spatial/tegola) и [Maputnik](https://github.com/maputnik/editor) (для первичного оформления карты), [Tippecanoe](https://github.com/mapbox/tippecanoe) (для подготовки векторных тайлов), [MapLibre GL JS](https://github.com/maplibre/maplibre-gl-js) (для веб-картографирования). Сайт написан на "голом" HTML + CSS + JavaScript, без фреймворков.

## Технические детали

Веб-карта работает бессерверно. Для работы заранее подготовленных векторных тайлов не требуется бекэнд. Векторные тайлы можно поставлять статически (as is), используя установленную структуру папок. Для хостинга веб-карты и векторных тайлов используется бесплатный сервис Github Pages.

## Содержание

Карта показывает слои водные объекты, горизонтали, типы землепользования, земельные участки, границы Сатинского полигона. Для имитации высотной застройки территории объектам в слое земельных участков присвоены значения высот. Остальные слои даны в исходной редакции. Легенда осознанно исключена, информация об объектах выводится по щелчку на карте. Невозможно определить местоположение карты, так как отсутствует карта-подложка. Это тоже сделано специально: для географического факультета МГУ эта территория однозначно узнаваема по картографическому образу, включающему горизонтали и водные объекты; для остальных читателей это по задумке напоминает сгенерированную карту из компьютерной игры или фантастического фильма.

## Заключение

Эта карта является экспериментом и проектом выходного дня. Картографическая корректность и "используемость" карты не ставилась на первое место, хотя и бралась в расчёт. Акцент сделан на элементе узнавания территории и оформлении произведения. В данном случае карта не инструмент исследования, а средство самовыражения.