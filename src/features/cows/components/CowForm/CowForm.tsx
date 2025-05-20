import type { Breed } from '@/cows/interfaces/breeds';
import type { Cow } from '@/models/cow';
import { renderContent } from '@/shared/lib/utils';
import { useFetch } from '@/shared/hooks/useFetch';
import { useMutate } from '@/shared/hooks/useMutate';
import { useState, type ChangeEvent, type FormEvent } from 'react';

interface CowFormProps {
  onError: (error: string) => void;
}

export const CowForm = ({ onError }: CowFormProps) => {
  const {
    data: breeds,
    isLoading: isLoadingBreeds,
    error: breedsError,
  } = useFetch<Breed[]>('/cows/breeds');

  const {
    mutate: postCow,
    isLoading: isPosting,
    error: backendError,
    success,
  } = useMutate<Cow>('/cows', 'post');

  const [cow, setCow] = useState({
    longCode: '',
    breed: breeds?.[0].id || '',
    origin: '',
    sex: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCow((pCow) => ({ ...pCow, [name]: value }));
  };

  if (breedsError) {
    onError('Hi ha hagut un error');
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!e.currentTarget) return;

    const formData = new FormData(e.currentTarget);

    const newCow = Object.fromEntries(formData);

    postCow(newCow);
  };

  const renderBreedsOptions = () =>
    renderContent(
      isLoadingBreeds,
      breedsError,
      <select
        name="breed"
        id=""
        value={cow.breed}
        onChange={handleChange}
      >
        {breeds?.map((breed) => (
          <option
            key={breed.id}
            value={breed.id}
          >
            {breed.value}
          </option>
        ))}
      </select>
    );

  return (
    <form onSubmit={handleSubmit}>
      {isPosting && <div>posting...</div>}
      {backendError && <div>BE error</div>}
      {success && <div>success!!</div>}

      <div>
        <label htmlFor="">Codi Llarg</label>
        <input
          type="text"
          name="longCode"
          value={cow.longCode}
          onChange={handleChange}
        />
      </div>
      <div>
        <div>Codi Curt</div>
        <div>{/* last 5 digits of long code */}</div>
      </div>
      <div>
        <label htmlFor="">Raça</label>
        {renderBreedsOptions()}
      </div>
      <div>
        <label htmlFor="">Sexe</label>
        <select
          id=""
          name="sex"
          value={cow.sex}
          onChange={handleChange}
        >
          <option value="m">Toro</option>
          <option value="f">Vaca</option>
        </select>
      </div>
      <div>
        <label htmlFor="">Procedencia</label>
        <select
          id=""
          name="origin"
          value={cow.origin}
          onChange={handleChange}
        >
          <option value="born">Naixament</option>
          <option value="bought">Compra</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
