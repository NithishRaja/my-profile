
export default function(action$){

  const albumImages = [
    {
      "title": "tenth Tour",
      "images": [
        "https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/1186671_419534531485543_857767581_n.jpg?oh=cef8fca5f2f158bf5861fe17f6c1b13b&oe=5A543B52",
        "https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/943044_482271998560193_423635541_n.jpg?oh=1c071c38c3b255ccecbadd57023840d5&oe=5A4BA11A",
        "https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/1235250_419538778151785_393666073_n.jpg?oh=856f70afc87a42de45f38ead55dd2a42&oe=5A16DE9D"
      ]
    },
    {
      "title": "shakthi birthday",
      "images": [
        "https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/10429851_696932123695665_253734662921625520_n.jpg?oh=e6917bf9d005d72de703d9c3cf2db5bb&oe=5A603048",
        "https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/11666248_871340956254780_2305277860614050044_n.jpg?oh=60abb6580b4eeae2e7725138acf6691f&oe=5A5BA064"
      ]
    },
    {
      "title": "balaji birthday",
      "images": [
        "https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/62847_493843140671232_135075184_n.jpg?oh=5cc4b3c572c49a1e88ff5ecd7f2e45e3&oe=5A5B66F8",
        "https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/558082_493843877337825_1028383797_n.jpg?oh=1a2b14fdf5f94b7491acd54a830710ef&oe=5A531E6D"
      ]
    },
    {
      "title": "college basketball",
      "images": [
        "https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/18057063_1460764353975303_762660756914081102_n.jpg?oh=1b0fde7cf033a54fd2852e7011176761&oe=5A145E0A"
      ]
    },
    {
      "title": "college tamil sangam",
      "images": [
        "https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/15965846_1144171759035263_1294149911768877393_n.jpg?oh=b4e5900da1f01c33b930352720a04acb&oe=5A4415C9"
      ]
    }
  ];

  return action$.ofType("START_SELECTED_ALBUM_UPDATE")
    .map(action => {
      return {type:"UPDATE_SELECTED_ALBUM", payload:albumImages[action.payload]};
    });
}
