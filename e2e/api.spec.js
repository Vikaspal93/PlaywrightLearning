
import (test, except) from "@pla"


test('API testing ', async(api) => {

    const response = await api.get('URL');

    expect(await response.status().toBe(200));

})