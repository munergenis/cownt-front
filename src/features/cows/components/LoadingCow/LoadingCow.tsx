import cowFemaleIcon from '../../assets/icons/cow/cow-icon.svg';

export const LoadingCow = () => {
  return (
    <div className="w-full py-16 flex justify-center">
      <img
        className="w-28 animate-spin"
        src={cowFemaleIcon}
        alt="Loading Icon"
      />
    </div>
  );
};
