import tw, { styled } from 'twin.macro';

export default styled.button`
  ${tw`
    px-5
    py-3 
    flex 
    justify-between    
    bg-primary
    text-white
    font-semibold
    items-center 
    border
    border-primary
    hover:(bg-white text-black)

    dark:(bg-accent text-primary border-accent)
    dark:hover:(bg-primary text-accent)
  `}
`;

export const Icon = styled.div`
  ${tw`
    w-10
    flex
    items-center 
    justify-center
    text-xl
  `}
`;
