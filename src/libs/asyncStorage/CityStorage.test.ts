import { getStorageCity, removeStorageCity, saveStorageCity } from "@libs/asyncStorage/cityStorage"
import { CityProps } from "@services/getCityByNameService"

const newCity: CityProps = {
  id: '1',
  name:'São Paulo',
  latitude: 123,
  longitude: 456
}

describe('Storage: CityStorage', () => {
  it("should return null when there isn't a city storaged", async () => {
    const response = await getStorageCity()
    expect(response).toBeNull()
  })

  it('should return storaged city', async () => {
    await saveStorageCity(newCity)
   
    const response = await getStorageCity()
    expect(response).toEqual(newCity)
  })

  it('should clear city storage', async () => {    
    await saveStorageCity(newCity)
    await removeStorageCity()

    const response = await getStorageCity()
    expect(response).toBeNull()
  })
})