class Data {
  _apiChar = `https://gateway.marvel.com:443/v1/public`;
  _apiKey = "apikey=bce6ca9570f4f680692a66a6083461ce";
  numOfChar = 9;
  //    numOfComics = 8;

  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };

  getAllCharacters = async () => {
    const res = await this.getResource(`${this._apiChar}?limit=${this.numOfChar}&offset=210&${this._apiKey}`);
    return res.data.results.map(this._transformCharacter);
  };

  getCharacter = async (id) => {
    const res = await this.getResource(`${this._apiChar}/${id}?${this._apiKey}`);
    return this._transformCharacter(res.data.results[0]);
  };

  _transformCharacter = (char) => {
    let description = char.description;
    if (description.length >= 230) {
      description = description.substr(0, 220) + "....";
    } else if (description.length === 0) {
      description += "This haracter haven't description.";
    }

    return {
      name: char.name,
      description: description,
      thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
    };
  };
}

export default Data;
