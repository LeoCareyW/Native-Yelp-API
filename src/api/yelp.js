import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer xUmCyCp3A10PxpHUl6KITt6fLXDLVYyyPH3KQz9cGOu_mpa2iAkc9nBMz6TGRHhBSKU7L-C0c3S8Y27-MwHm-lw4lN6szn0ZugBEgWOfWrrQmCUJSaUmSdyXIApuX3Yx'
  }
});

