var config = {
    style: 'mapbox://styles/greenlad/ck1j5ardl068i1cpc8jn3ohj0', //TODO
    accessToken: 'pk.eyJ1IjoiZ3JlZW5sYWQiLCJhIjoiY2sxajJ6OGJmMDc3azNibGY2d2FjaTh5biJ9.nsfrkQWCJatSpNdJhBqTcQ', //TODO
    title: 'MapBox lovers', //TODO
    subtitle: 'Our anonymous locations', //TODO
    byline: 'By Moses Tyav', //TODO
    footer: 'Created at Concatenate Lagos 2019 for MapBox',
    showMarkers: true,
    theme: 'light',
    alignment: 'right',
    chapters: [
        //TODO replace this data with data from the first point in your dataset
        {
            id: 'concatenate-lagos',
            title: 'Concatenate Lagos',
            "video":"https://www.mapbox.com/assets/industry-consumer-ar-44c94098e536f337fc70245a5bec253e.mp4",
            description: 'A free conference for African developers with speakers from around the world.',
            location: {
              "center": [
                3.366639462826271,
                6.51635441424402
              ],
              "zoom": 11.805394255186213,
              "pitch": 33.499999999999986,
              "bearing": 136.79999999999995
            }
        },
        {
          id: 'games',
          title: 'Ikeja Training Zone',
          "image": "https://pbs.twimg.com/profile_banners/55236002/1565896431/1500x500",
          description: 'A free conference for African developers with speakers from around the world.',
        "location": {
            "center": [
              3.3244804430235604,
              6.574272642300301
            ],
            // "onChapterEnter": [
            //   {
            //     "layer":"kata-zones",
            //     "opacity": 1
            //   }
            // ],
            "zoom": 11.155845122982495,
            "pitch": 60,
            "bearing": 0
          }
        },
        {
          id: 'ikeja',
          title: 'Lagos National Stadium',
          description: 'A free conference for African developers with speakers from around the world.',
          
            "location": {
              "center": [
                3.365292267529867,
                6.4990231166058265
              ],
              "zoom": 10.03,
              "pitch": 0,
              "bearing": 0
            }
          
        },
        {
          id: 'yaba',
          title: 'Lagos National Stadium',
          description: 'A free conference for African developers with speakers from around the world.',
          
            "location": {
              "center": [
                3.401942089971101,
                6.442820485878201
              ],
              "zoom": 10.03,
              "pitch": 0,
              "bearing": 0
            }
          }
        //TODO Copy-paste more chapters here - one for each point in your dataset!
    ]
};
