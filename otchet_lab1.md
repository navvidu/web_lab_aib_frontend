# HTTP HTTPS и их параметры
___________________________________________________
## Лабораторная работа №1
### Амелякина Дарья Сергеевна, группа АИБ-3-042
В лабораторной работе будет использован скрипт: `$ curl -v -I -k -L -s` , где

```
-v — отправляет HEAD-запрос, на который сервер должен вернуть все, включая тело ответа.
-I — позволяет получить заголовок без тела документа.
-k — разрешает незащищённые подключения и избежение ошибок с сертификатом.
-L — разрешает перенаправления.
-s — отключает индикатор прогресса.
```
####  __[‍РГУПС](https://www.rgups.ru)__ cкрипт: 
`$ curl -v -I -k -L -s https://www.rgups.ru/` 
#### HTTP ответ
>```shell
> HTTP/1.1 200 OK # Статус ответа
> Server: nginx/1.19.1 # Веб-сервер, ПО (nginx) его версия (1.19.1)
> Date: Mon, 11 Sep 2023 09:36:10 GMT # Дата и время ответа сервера  
> Content-Type: text/html; charset=utf-8 # Тип контента от сервера
> Connection: keep-alive # Соединение между клиентом и сервером после обмена данными
> X-Powered-By: ProcessWire CMS # Контент-менеджер сайта  
> Set-Cookie: wire=0dffbf2a9405ed793ef6d58a6ed618cd; path=/; HttpOnly; SameSite=Lax
> # устанавливает cookie с именем "wire", значением, дополнительными настройками доступности и атрибутами безопасности 
> Expires: Thu, 19 Nov 1981 08:52:00 GMT # Заголовок управления кэшированием, указывающий, что ресурс истек и не должен храниться в кэше
> Cache-Control: no-store, no-cache, must-revalidate # Заголовок, зависящий от реализации, который может иметь различные 
># эффекты в любом месте цепочки запрос-ответ
> Pragma: no-cache # Дополнительный заголовок, который сообщает клиенту, что кэширование данного ответа запрещено
>
>* Connected to www.rgups.ru (80.72.224.90) port 443 # IP адрес и порт
>>HEAD / HTTP/1.1 # Протокол, по которому осуществлялся запрос
>>Host: www.rgups.ru # Хост
>>User-Agent: curl/8.2.1 # Программное обеспечение или устройство, которое отправляет запрос

#### __[Github](https://github.com/)__ cкрипт: 
`$ curl -v -I -k -L -s https://github.com/`
#### HTTP ответ 
>```shell
> HTTP/1.1 200 OK
> Server: GitHub.com
> Date: Mon, 11 Sep 2023 10:20:42 GMT
> Content-Type: text/html; charset=utf-8
> Vary: X-PJAX, X-PJAX-Container, Turbo-Visit, Turbo-Frame, Accept-Language, Accept-Encoding, Accept, X-Requested-With # Заголовок указывает на факторы, 
> # которые могут влиять на кэширование ответа на стороне клиента или прокси-сервера.
> content-language: en-US # Язык контента
> ETag: W/"3c951daeb6b499d6e46892d82839cbbd" # метка, которая идентифицирует уникальную версию ресурса
> Cache-Control: max-age=0, private, must-revalidate
> Strict-Transport-Security: max-age=31536000; includeSubdomains; preload # клиент должен поддерживать строгую защиту транспортного уровня
> X-Frame-Options: deny # Мера безопасности, которая может помочь предотвратить атаки.
> X-Content-Type-Options: nosniff
> X-XSS-Protection: 0
>
> Set-Cookie: _octo=GH1.1.1968087165.1694427647; Path=/; Domain=github.com; Expires=Wed, 11 Sep 2024 10:20:47 GMT; Secure; SameSite=Lax
> Set-Cookie: logged_in=no; Path=/; Domain=github.com; Expires=Wed, 11 Sep 2024 10:20:47 GMT; HttpOnly; Secure; SameSite=Lax
> Accept-Ranges: bytes # Указывает, что сервер поддерживает диапазоны запросов для данного ресурса.
> X-GitHub-Request-Id: C3D5:081D:41D5605:42D5713:64FEE9FF
>
>* Connected to github.com (140.82.121.4) port 443
>> HEAD / HTTP/1.1
>> Host: github.com
>> User-Agent: Yandex
```
IP адрес веб сервера: 140.82.121.4
порт к которому вы обращаетесь: 443
истинное значение хоста ресурса: github.com
информация о необходимости кэширования: max-age=0, private
данные о формате данных которые содержатся в теле ответа: text/html
код ответа и его значение: 200-OK
протокол по которому осуществлялся запрос: HTTP/1.1
```
#### __[РЖД](https://www.rzd.ru/)__ скрипт:
`$ curl -v -I -k -L -s https://www.rzd.ru/ --User-agent "Yandex"`, где

```
--User-agent "Yandex — gрограммное обеспечение или устройство, которое отправляет запрос"
```
#### HTTP ответ
>```shell
> HTTP/1.1 200
> Content-Type: text/html;charset=utf-8
> Content-Length: 210102
> Connection: keep-alive
> Date: Mon, 11 Sep 2023 10:08:26 GMT
> Vary: Accept-Encoding
> X-UCM-Pod-Name: inex-ucm-776d97f9d-rkqz7 # Связь с идентификацией серверного подключения.
> Strict-Transport-Security: max-age=15724800; includeSubDomains
> Via: nginx3
> X-Frame-Options: sameorigin
> Set-Cookie: session-cookie=1783d04b236726e6ced94cb218991a24c3b1e6828a194fe4f9670cfb7b7f108fd056dfa00fbae611db00310d3c3d9ef8; Max-Age=86400; Path=/; secure; HttpOnly
> X-XSS-Protection: 1; mode=block # Включенная защита от XSS 
>
>* Connected to www.rzd.ru (212.164.138.127) port 443
>> HEAD / HTTP/1.1
>> Host: www.rzd.ru
>> User-Agent: Yandex
```
IP адрес веб сервера: 212.164.138.127
порт к которому вы обращаетесь: 443
истинное значение хоста ресурса:  www.rzd.ru
данные о формате данных которые содержатся в теле ответа: text/html
код ответа и его значение: 200-OK
протокол по которому осуществлялся запрос: HTTP/1.1
```

#### _[Яндекс](https://yandex.ru/)__ скрипт:
`$ curl -v -I -L -s https://yandex.ru/`
#### HTTP ответ 
>```shell
>* Connected to yandex.ru (77.88.55.88) port 443
>> HEAD / HTTP/1.1
>> Host: yandex.ru
>> User-Agent: curl/8.2.1
>> Accept: */*
>
>< HTTP/1.1 302 Moved temporarily
>< Accept-CH: Sec-CH-UA-Platform-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA, Sec-CH-UA-Full-Version-List, Sec-CH-UA-WoW64, Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Platform, Sec-CH-UA-Full-Version, Viewport-Width, DPR, Device-Memory, RTT, Downlink, ECT # Строка указывающая на тип принимаемого контента 
>< Cache-Control: max-age=1209600,private
>< Date: Mon, 11 Sep 2023 10:25:23 GMT
>< Location: https://dzen.ru/?yredirect=true
>< NEL: {"report_to": "network-errors", "max_age": 100, "success_fraction": 0.001, "failure_fraction": 0.1} # Политика обработки ошибок сети.
>< P3P: policyref="/w3c/p3p.xml", CP="NON DSP ADM DEV PSD IVDo OUR IND STP PHY PRE NAV UNI"
>< Portal: Home
>< Report-To: { "group": "network-errors", "max_age": 100, "endpoints": [{"url": "https://dr.yandex.net/nel", "priority": 1}, {"url": "https://dr2.yandex.net/nel", "priority": 2}]}
>< X-Content-Type-Options: nosniff
>< X-Robots-Tag: unavailable_after: 12 Sep 2022 00:00:00 PST
>< X-Yandex-Req-Id: 1694427923934101-11140090087091593417-balancer-l7leveler-kubr-yp-sas-90-BAL-401
>< set-cookie: is_gdpr=0; Path=/; Domain=.yandex.ru; Expires=Wed, 10 Sep 2025 10:25:23 GMT
>< set-cookie: is_gdpr_b=COj6IhDlzQEoAg==; Path=/; Domain=.yandex.ru; Expires=Wed, 10 Sep 2025 10:25:23 GMT
>< set-cookie: _yasc=IzT//+e8fb8b7zBKu2Dkr5mjW6EZHauMrHyazi3RLgy/JRJEn0D4kQdSWWShsabyg3tw; domain=.yandex.ru; path=/; expires=Thu, 08 Sep 2033 10:25:23 GMT; secure
>< set-cookie: i=XbiwgVr4jKampuzMVf9OvBapfzLrAvsnb7d77adojvp7p99SQ7WgQpU6i7gAtfcXuJ79yfTgpue3d+M5wo5BxSddg98=; Expires=Wed, 10-Sep-2025 10:25:23 GMT; Domain=.yandex.ru; Path=/; Secure; HttpOnly
>< set-cookie: yandexuid=5915934171694427923; Expires=Wed, 10-Sep-2025 10:25:23 GMT; Domain=.yandex.ru; Path=/; Secure
```
IP адрес веб сервера: 77.88.55.88
порт к которому вы обращаетесь: 443
истинное значение хоста ресурса: yandex.ru
информация о необходимости кэширования: max-age=1209600,private
код ответа и его значение: 200-OK
протокол по которому осуществлялся запрос: HTTP/1.1
```

#### __[Python](https://www.python.org/)__ скрипт:
`$ curl -v -I -k -L -s https://www.python.org/`
#### HTTP ответ
>```shell
>Connected to python.org (151.101.192.223) port 80
> HEAD / HTTP/1.1
> Host: python.org
> User-Agent: curl/8.2.1
> Accept: */*
>
>< HTTP/1.1 200 OK
>< Connection: keep-alive
>< Content-Length: 50526
>< Server: nginx
>< Content-Type: text/html; charset=utf-8
>< X-Frame-Options: SAMEORIGIN
>< Via: 1.1 vegur, 1.1 varnish, 1.1 varnish
>< Accept-Ranges: bytes
>< Date: Wed, 13 Sep 2023 22:18:11 GMT
>< Age: 2770
>< X-Served-By: cache-iad-kiad7000025-IAD, cache-fra-eddf8230082-FRA
>< X-Cache: HIT, HIT
>< X-Cache-Hits: 430, 8
>< X-Timer: S1694643491.017478,VS0,VE0
>< Vary: Cookie
>< Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```
IP адрес веб сервера: 151.101.192.223
порт к которому вы обращаетесь: 80
истинное значение хоста ресурса: python.org
данные о формате данных которые содержатся в теле ответа: text/html
код ответа и его значение: 200-OK
протокол по которому осуществлялся запрос: HTTP/1.1
```
#### __[Saint GIT](https://git-scm.com/)__ скрипт:
`$ curl -v -I -k -L -s https://git-scm.com/`
#### HTTP ответ 
>```shell
>HTTP/1.1 200 OK
>Date: Thu, 14 Sep 2023 15:03:39 GMT
>Content-Type: text/html; charset=utf-8
>Connection: keep-alive
>X-Frame-Options: SAMEORIGIN
>X-Xss-Protection: 1; mode=block
>X-Content-Type-Options: nosniff
>X-Download-Options: noopen
>X-Permitted-Cross-Domain-Policies: none
>Referrer-Policy: strict-origin-when-cross-origin
>Cache-Control: public, max-age=14400
>Etag: W/"db69273d9410cbf4536e9d4b3a59685d"
>X-Request-Id: 476d2e08-474c-4f3d-8503-d83ed21ae45f
>X-Runtime: 0.015343
>Via: 1.1 vegur
>CF-Cache-Status: HIT
>Age: 5490
>Server: cloudflare
>CF-RAY: 8069849a4c6116af-DME # Уникальный идентификатор запроса для отслеживания и отладки запросов при возникновении проблем
>
>* Connected to git-scm.com (188.114.98.224) port 443
>> HEAD / HTTP/1.1
>> Host: git-scm.com
>> User-Agent: curl/8.2.1
>> Accept: */*
```
IP адрес веб сервера: 188.114.98.224
порт к которому вы обращаетесь: 443
истинное значение хоста ресурса: git-scm.com
данные о формате данных которые содержатся в теле ответа: text/html
код ответа и его значение: 200-OK
протокол по которому осуществлялся запрос: HTTP/1.1
```
#### __[Jetbrains](https://www.jetbrains.com/)__ скрпит:
`$ curl -v -I -k -L -s https://www.jetbrains.com/`
#### HTTP ответ 
>```shell
>HTTP/1.1 200 OK
>Content-Type: text/html; charset=utf-8
>Content-Length: 47213
>Connection: keep-alive
>Date: Thu, 14 Sep 2023 15:06:25 GMT
>Server: nginx
>X-Content-Type-Options: nosniff
>Referrer-Policy: same-origin
>Expires: Thu, 14 Sep 2023 15:06:25 GMT
>Cache-Control: max-age=0
>Pragma: no-cache
>X-Frame-Options: DENY
>X-Content-Type-Options: nosniff
>X-Xss-Protection: 1; mode=block
>Strict-Transport-Security: max-age=31536000;
>Vary: Accept-Encoding
>Via: 1.1 b41c5c36f8ef3fb3917c7c9f7687196.cloudfront.net (CloudFront)
>Alt-Svc: h3=":443"; ma=86400 # Определяет альтернативные сервисы для текущего ресурса
>Age: 136
>Set-Cookie: cf_country-region=RU-ROS; Domain=jetbrains.com; Path=/; Secure
>X-Cache: Hit from cloudfront
>X-Amz-Cf-Pop: HEL50-C1
>X-Amz-Cf-Id: PDR7TTe0hacsJYpnrCRkYldcMEfU0JXEVQpk6lOKGpYsAkvWOQwOBw==
>
>* Connected to www.jetbrains.com (13.33.243.120) port 443
>> HEAD / HTTP/1.1
>> Host: www.jetbrains.com
>> User-Agent: curl/8.2.1
>> Accept: */*
```
IP адрес веб сервера: 13.33.243.120
порт к которому вы обращаетесь: 443
истинное значение хоста ресурса: www.jetbrains.com
информация о необходимости кэширования: max-age=0
данные о формате данных которые содержатся в теле ответа: text/html
код ответа и его значение: 200-OK
протокол по которому осуществлялся запрос: HTTP/1.1
```
#### __[VSC - this is best choose](https://code.visualstudio.com/)__ скрипт:
`$ curl -v -I -k -L -s https://code.visualstudio.com/`
#### HTTP ответ
>```shell
>HTTP/1.1 200 OK
>Content-Length: 50213
>Content-Type: text/html; charset=utf-8
>Accept-Ranges: bytes
>ETag: W/"c425-XBxswsHoV0dlJCAKuBbwZ9s5rjQ"
>Strict-Transport-Security: max-age=31536000; includeSubDomains
>Content-Security-Policy: frame-ancestors 'self'
>X-Frame-Options: SAMEORIGIN
>X-XSS-Protection: 1; mode=block
>X-Content-Type-Options: nosniff
>X-Content-Type-Options: nosniff
>X-Powered-By: ASP.NET
>x-azure-ref: 0wiIDZQAAAAA37ZHVoE6iQaeftLRGPktsU1RPRURHRTEzMTQAYmU4N2RjNmQtNDBmOS00NWIwLTg4MTAtOTkxMDg3ZWY4YjI5
>X-Cache: CONFIG_NOCACHE
>Date: Thu, 14 Sep 2023 15:12:02 GMT
>
>* Connected to code.visualstudio.com (13.107.213.53) port 443
>> HEAD / HTTP/1.1
>> Host: code.visualstudio.com
>> User-Agent: curl/8.2.1
>> Accept: */*
```
IP адрес веб сервера: 13.107.213.53
порт к которому вы обращаетесь: 443
истинное значение хоста ресурса: code.visualstudio.com
данные о формате данных которые содержатся в теле ответа: text/html
код ответа и его значение: 200-OK
протокол по которому осуществлялся запрос: HTTP/1.1
```


