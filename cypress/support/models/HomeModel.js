// #region Constants

import { faker } from '@faker-js/faker';

// #endregion

const HomeModel = {
    "RANDOM_ZIP_CODE": faker.address.zipCode(),
    "RANDMOM_NUMER_OF_PEOPLE": faker.random.numeric(2),
}

export default HomeModel