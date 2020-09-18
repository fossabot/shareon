/**
 * @typedef {{
 *   url: string,
 *   title?: string,
 *   media?: string,
 *   text?: string,
 *   via?: string,
 * }} PublicationData
 */

/**
 * @typedef {function(PublicationData): string} UrlBuilder
 */

/**
 * @typedef {{
 *   color: string,
 *   icon: string,
 *   iconWhenText?: string,
 *   url: UrlBuilder
 * }} SocialNetwork
 */

/**
 * List of social networks available to shareon
 *
 * @type {Record<string, SocialNetwork>}
 */
const NETWORKS = {
  facebook: {
    color: '#1877F2',
    icon: 'data:image/svg+xml,%3Csvg fill="%23fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"/%3E%3C/svg%3E',
    url: (d) => `https://www.facebook.com/sharer/sharer.php?u=${d.url}`,
  },
  linkedin: {
    color: '#2867B2',
    icon: 'data:image/svg+xml,%3Csvg fill="%23fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M23.722 23.72h-4.91v-7.692c0-1.834-.038-4.194-2.559-4.194-2.56 0-2.95 1.995-2.95 4.06v7.827H8.394V7.902h4.716v2.157h.063c.659-1.244 2.261-2.556 4.655-2.556 4.974 0 5.894 3.274 5.894 7.535zM.388 7.902h4.923v15.819H.388zM2.85 5.738A2.849 2.849 0 010 2.886a2.851 2.851 0 112.85 2.852z"/%3E%3C/svg%3E',
    iconWhenText: 'data:image/svg+xml,%3Csvg fill="%23fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/%3E%3C/svg%3E',
    url: (d) => `https://www.linkedin.com/shareArticle?mini=true&url=${d.url}&title=${d.title}`,
  },
  messenger: {
    color: '#0099FF',
    icon: 'data:image/svg+xml,%3Csvg fill="%23fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 11.64C0 4.95 5.24 0 12 0s12 4.95 12 11.64-5.24 11.64-12 11.64c-1.21 0-2.38-.16-3.47-.46a.96.96 0 00-.64.05L5.5 23.92a.96.96 0 01-1.35-.85l-.07-2.14a.97.97 0 00-.32-.68A11.39 11.39 0 010 11.64zm8.32-2.19l-3.52 5.6c-.35.53.32 1.14.82.75l3.79-2.87c.26-.2.6-.2.87 0l2.8 2.1c.84.63 2.04.4 2.6-.48l3.52-5.6c.35-.53-.32-1.13-.82-.75l-3.79 2.87c-.25.2-.6.2-.86 0l-2.8-2.1a1.8 1.8 0 00-2.61.48z"/%3E%3C/svg%3E',
    url: (d) => `https://www.facebook.com/dialog/send?app_id=3619024578167617&link=${d.url}&redirect_uri=${d.url}`,
  },
  odnoklassniki: {
    color: '#EE8208',
    icon: 'data:image/svg+xml,%3Csvg fill="%23fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M14.505 17.44a11.599 11.599 0 003.6-1.49 1.816 1.816 0 00-1.935-3.073 7.866 7.866 0 01-8.34 0 1.814 1.814 0 00-2.5.565c0 .002 0 .004-.002.005a1.812 1.812 0 00.567 2.5l.002.002c1.105.695 2.322 1.2 3.596 1.488l-3.465 3.465A1.796 1.796 0 006 23.439l.03.03c.344.354.81.53 1.274.53.465 0 .93-.176 1.275-.53L12 20.065l3.404 3.406a1.815 1.815 0 002.566-2.565l-3.465-3.466zM12 12.388a6.202 6.202 0 006.195-6.193C18.195 2.78 15.415 0 12 0S5.805 2.78 5.805 6.197A6.2 6.2 0 0012 12.389zm0-8.757a2.566 2.566 0 010 5.13 2.569 2.569 0 01-2.565-2.564A2.57 2.57 0 0112 3.63z"/%3E%3C/svg%3E',
    url: (d) => `https://connect.ok.ru/offer?url=${d.url}&title=${d.title}${d.media ? `&imageUrl=${d.media}` : ''}`,
  },
  pinterest: {
    color: '#eE0023',
    icon: 'data:image/svg+xml,%3Csvg fill="%23fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026z"/%3E%3C/svg%3E',
    url: (d) => `https://pinterest.com/pin/create/button/?url=${d.url}&description=${d.title}${d.media ? `&media=${d.media}` : ''}`,
  },
  pocket: {
    color: '#EF4154',
    icon: 'data:image/svg+xml,%3Csvg fill="%23fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="m18.813 10.259-5.646 5.419a1.649 1.649 0 0 1 -2.282 0l-5.646-5.419a1.645 1.645 0 0 1 2.276-2.376l4.511 4.322 4.517-4.322a1.643 1.643 0 0 1 2.326.049 1.64 1.64 0 0 1 -.045 2.326zm5.083-7.546a2.163 2.163 0 0 0 -2.041-1.436h-19.676c-.9 0-1.717.564-2.037 1.405-.094.25-.142.511-.142.774v7.245l.084 1.441c.348 3.277 2.047 6.142 4.682 8.139.045.036.094.07.143.105l.03.023a11.899 11.899 0 0 0 4.694 2.072c.786.158 1.591.24 2.389.24.739 0 1.481-.067 2.209-.204.088-.029.176-.045.264-.06.023 0 .049-.015.074-.029a12.002 12.002 0 0 0 4.508-2.025l.029-.031.135-.105c2.627-1.995 4.324-4.862 4.686-8.148l.073-1.441v-7.233c0-.251-.031-.5-.121-.742z"/%3E%3C/svg%3E',
    url: (d) => `https://getpocket.com/edit.php?url=${d.url}`,
  },
  reddit: {
    color: '#FF4500',
    icon: 'data:image/svg+xml,%3Csvg fill="%23fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M19.53 1.148a1.83 1.83 0 00-1.667 1.054l-4.372-.928a.522.522 0 00-.358.063.515.515 0 00-.21.297L11.59 7.925c-2.807.086-5.32.909-7.137 2.237a2.668 2.668 0 00-1.815-.737A2.64 2.64 0 000 12.064a2.634 2.634 0 001.563 2.407 4.95 4.95 0 00-.065.803c0 4.053 4.71 7.326 10.537 7.326s10.537-3.273 10.537-7.326a4.548 4.548 0 00-.063-.782 2.732 2.732 0 001.519-2.428 2.64 2.64 0 00-2.639-2.64 2.53 2.53 0 00-1.816.74c-1.796-1.288-4.287-2.134-7.031-2.239l1.204-5.637 3.906.823a1.888 1.888 0 001.878 1.777c1.024 0 1.87-.837 1.88-1.861a1.884 1.884 0 00-1.88-1.88zM7.907 18.066c-.13 0-.254.05-.347.141a.498.498 0 000 .697c1.266 1.267 3.736 1.373 4.454 1.373s3.167-.084 4.454-1.373a.546.546 0 00.044-.697.5.5 0 00-.698 0c-.823.802-2.533 1.099-3.779 1.099s-2.977-.295-3.779-1.099a.49.49 0 00-.349-.142zm-1.932-4.122c0-1.035.844-1.88 1.88-1.88 1.034 0 1.878.843 1.878 1.879S8.89 15.82 7.856 15.82a1.882 1.882 0 01-1.88-1.877zm10.155-1.88c1.035 0 1.88.845 1.88 1.879 0 1.035-.844 1.878-1.879 1.878s-1.879-.843-1.879-1.877c0-1.037.844-1.88 1.878-1.88z" fill-rule="evenodd"/%3E%3C/svg%3E',
    url: (d) => `https://www.reddit.com/submit?title=${d.title}&url=${d.url}`,
  },
  telegram: {
    color: '#179CDE',
    icon: 'data:image/svg+xml,%3Csvg fill="%23fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M1.517 11.31c-.962.382-1.466.756-1.512 1.122-.088.702.924.921 2.196 1.335 1.037.337 2.433.731 3.158.747.658.014 1.393-.257 2.204-.814 5.533-3.735 8.39-5.622 8.57-5.663.126-.029.301-.065.42.04.119.106.107.306.095.36-.101.429-5.3 5.156-5.599 5.467-1.143 1.187-2.443 1.913-.437 3.235 1.735 1.144 2.746 1.873 4.534 3.045 1.142.75 2.039 1.637 3.218 1.529.543-.05 1.104-.56 1.389-2.083.673-3.598 1.996-11.392 2.302-14.604a3.585 3.585 0 00-.034-.8c-.027-.158-.084-.383-.29-.55-.243-.197-.619-.24-.787-.236-.764.013-1.936.42-7.579 2.767C11.39 7.03 7.44 8.73 1.517 11.31z"/%3E%3C/svg%3E',
    url: (d) => `https://telegram.me/share/url?url=${d.url}${d.text ? `&text=${d.text}` : ''}`,
  },
  twitter: {
    color: '#1DA1F2',
    icon: 'data:image/svg+xml,%3Csvg fill="%23fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/%3E%3C/svg%3E',
    url: (d) => `https://twitter.com/intent/tweet?url=${d.url}&text=${d.title}${d.via ? `&via=${d.via}` : ''}`,
  },
  viber: {
    color: '#7360F2',
    icon: 'data:image/svg+xml,%3Csvg fill="%23fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11.398.002C9.473.028 5.331.344 3.014 2.467 1.294 4.177.693 6.698.623 9.82c-.06 3.11-.13 8.95 5.5 10.541v2.42s-.038.97.602 1.17c.79.25 1.24-.499 1.99-1.299l1.4-1.58c3.85.32 6.8-.419 7.14-.529.78-.25 5.181-.811 5.901-6.652.74-6.031-.36-9.831-2.34-11.551l-.01-.002c-.6-.55-3-2.3-8.37-2.32 0 0-.396-.025-1.038-.016zm.067 1.697c.545-.003.88.02.88.02 4.54.01 6.711 1.38 7.221 1.84 1.67 1.429 2.528 4.856 1.9 9.892-.6 4.88-4.17 5.19-4.83 5.4-.28.09-2.88.73-6.152.52 0 0-2.439 2.941-3.199 3.701-.12.13-.26.17-.35.15-.13-.03-.17-.19-.16-.41l.02-4.019c-4.771-1.32-4.491-6.302-4.441-8.902.06-2.6.55-4.732 2-6.172 1.957-1.77 5.475-2.01 7.11-2.02zm.36 2.6a.299.299 0 00-.3.299.3.3 0 00.3.3 5.631 5.631 0 014.03 1.59c1.09 1.06 1.621 2.48 1.641 4.34a.3.3 0 00.3.3v-.009a.3.3 0 00.3-.3 6.451 6.451 0 00-1.81-4.76c-1.19-1.16-2.692-1.76-4.462-1.76zm-3.954.69a.955.955 0 00-.615.12h-.012c-.41.24-.788.54-1.148.94-.27.32-.421.639-.461.949a1.24 1.24 0 00.05.541l.02.01a13.722 13.722 0 001.2 2.6 15.383 15.383 0 002.32 3.171l.03.04.04.03.03.03.03.03a15.603 15.603 0 003.18 2.33c1.32.72 2.122 1.06 2.602 1.2v.01c.14.04.268.06.398.06a1.84 1.84 0 001.102-.472c.39-.35.7-.738.93-1.148v-.01c.23-.43.15-.841-.18-1.121a13.632 13.632 0 00-2.15-1.54c-.51-.28-1.03-.11-1.24.17l-.45.569c-.23.28-.65.24-.65.24l-.012.01c-3.12-.8-3.95-3.959-3.95-3.959s-.04-.43.25-.65l.56-.45c.27-.22.46-.74.17-1.25a13.522 13.522 0 00-1.54-2.15.843.843 0 00-.504-.3zm4.473.89a.3.3 0 00.002.6 3.78 3.78 0 012.65 1.15 3.5 3.5 0 01.9 2.57.3.3 0 00.3.299l.01.012a.3.3 0 00.3-.301c.03-1.19-.34-2.19-1.07-2.99-.73-.8-1.75-1.25-3.05-1.34a.3.3 0 00-.042 0zm.49 1.619a.305.305 0 00-.018.611c.99.05 1.47.55 1.53 1.58a.3.3 0 00.3.29h.01a.3.3 0 00.29-.32c-.07-1.34-.8-2.091-2.1-2.161a.305.305 0 00-.012 0z"/%3E%3C/svg%3E',
    url: (d) => `viber://forward?text=${d.title}%0D%0A${d.url}${d.text ? `%0D%0A%0D%0A${d.text}` : ''}`,
  },
  vkontakte: {
    color: '#4680C2',
    icon: 'data:image/svg+xml,%3Csvg fill="%23fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M23.058 19.504h-2.616c-.99 0-1.297-.787-3.076-2.59-1.55-1.501-2.236-1.704-2.617-1.704-.534 0-.687.153-.687.89v2.363c0 .636-.202 1.017-1.88 1.017-2.77 0-5.845-1.677-8.004-4.804C.925 10.103.034 6.672.034 5.961c0-.381.153-.737.89-.737H3.54c.66 0 .915.305 1.17 1.016 1.295 3.736 3.456 7.014 4.345 7.014.33 0 .483-.153.483-.99V8.399c-.102-1.78-1.042-1.931-1.042-2.566 0-.306.255-.61.66-.61h4.117c.56 0 .762.304.762.964v5.211c0 .558.255.762.407.762.33 0 .61-.204 1.22-.813 1.88-2.11 3.227-5.362 3.227-5.362.178-.381.483-.737 1.145-.737h2.616c.788 0 .966.405.788.965-.33 1.526-3.532 6.048-3.532 6.048-.28.457-.381.66 0 1.17.28.381 1.194 1.169 1.805 1.88 1.118 1.27 1.98 2.338 2.21 3.076.255.735-.128 1.116-.864 1.116z"/%3E%3C/svg%3E',
    url: (d) => `https://vk.com/share.php?url=${d.url}&title=${d.title}${d.media ? `&image=${d.media}` : ''}`,
  },
  whatsapp: {
    color: '#25D366',
    icon: 'data:image/svg+xml,%3Csvg fill="%23fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/%3E%3C/svg%3E',
    url: (d) => `https://wa.me/?text=${d.title}%0D%0A${d.url}${d.text ? `%0D%0A%0D%0A${d.text}` : ''}`,
  },
};

/**
 * @type {Record<string, UrlBuilder>}
 */
const urlBuilderMap = Object.fromEntries(
  Object.entries(NETWORKS)
    .map((entry) => [
      entry[0],
      entry[1].url,
    ]),
);

module.exports = {
  fullNetworkMap: NETWORKS,
  urlBuilderMap,
};
