<?php
/**
 * @see https://github.com/artesaos/seotools
 */

return [
    'meta' => [
        /*
         * The default configurations to be used by the meta generator.
         */
        'defaults'       => [
            'title'        => 'Portfolio @franpax95', // set false to total remove
            'titleBefore'  => false, // Put defaults.title before page title, like 'It's Over 9000! - Dashboard'
            'description'  => 'Portfolio personal de Francisco Javier Navarro García. Echa un ojo a mis proyectos. Desarrollador web full stack: por el lado del frontend (JavaScript) React o ReactJS; por el lado del backend Laravel y CodeIgniter (PHP). Visita mi instagram @franpax95 para estar al día con mis trabajos. Web developer React & Laravel.', // set false to total remove
            'separator'    => ' - ',
            'keywords'     => ['React', 'ReactJS', 'Web', 'Developer', 'Laravel', 'frontend', 'backend'],
            // 'canonical'    => null, // Set null for using Url::current(), set false to total remove
            'canonical'    => 'https://franpax95.com',
            'robots'       => false, // Set to 'all', 'none' or any combination of index/noindex and follow/nofollow
        ],
        /*
         * Webmaster tags are always added.
         */
        'webmaster_tags' => [
            'google'    => null,
            'bing'      => null,
            'alexa'     => null,
            'pinterest' => null,
            'yandex'    => null,
            'norton'    => null,
        ],

        'add_notranslate_class' => false,
    ],
    'opengraph' => [
        /*
         * The default configurations to be used by the opengraph generator.
         */
        'defaults' => [
            'title'       => 'Portfolio @franpax95', // set false to total remove
            'description' => 'Portfolio personal de Francisco Javier Navarro García. Echa un ojo a mis proyectos. Desarrollador web full stack: por el lado del frontend (JavaScript) React o ReactJS; por el lado del backend Laravel y CodeIgniter (PHP). Visita mi instagram @franpax95 para estar al día con mis trabajos. Web developer React & Laravel.', // set false to total remove
            'url'         => 'https://franpax95.com', // Set null for using Url::current(), set false to total remove
            'type'        => false,
            'site_name'   => 'Portfolio Francisco Javier Navarro García @franpax95',
            'images'      => [],
        ],
    ],
    'twitter' => [
        /*
         * The default values to be used by the twitter cards generator.
         */
        'defaults' => [
            'card'        => 'summary',
            'site'        => '@franpalumbo95',
        ],
    ],
    'json-ld' => [
        /*
         * The default configurations to be used by the json-ld generator.
         */
        'defaults' => [
            'title'       => 'Portfolio @franpax95', // set false to total remove
            'description' => 'Portfolio personal de Francisco Javier Navarro García. Echa un ojo a mis proyectos. Desarrollador web full stack: por el lado del frontend (JavaScript) React o ReactJS; por el lado del backend Laravel y CodeIgniter (PHP). Visita mi instagram @franpax95 para estar al día con mis trabajos. Web developer React & Laravel.', // set false to total remove
            'url'         => 'https://franpax95.com', // Set null for using Url::current(), set false to total remove
            'type'        => 'WebPage',
            'images'      => [],
        ],
    ],
];
