'use client';
import { cn } from '@/libs/utils';
import { ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import LeftArrow from '@/assets/icons/left-arrow';
import RightArrow from '@/assets/icons/right-arrow';

interface ICarousel {
  children: ReactNode;
  className?: string;
}

const Carousel = ({ children, className }: ICarousel) => {
  return <div className={cn('', className)}>{children}</div>;
};

export default Carousel;

interface ICarouselContainer extends ICarousel {}

export const CarouselContainer = ({ children, className, ...props }: ICarouselContainer) => {
  return (
    <div
      className={cn('flex items-center justify-between gap-8 max-lg:flex-col-reverse', className)}
      data-name="carousel-container"
    >
      {children}
    </div>
  );
};

interface ICarouselContent extends ICarousel {}

export const CarouselContent = ({ children, className, ...props }: ICarouselContent) => {
  return <div className={cn('', className)}>{children}</div>;
};

interface ICarouselPreview extends ICarousel {}

export const CarouselPreview = ({ children, className, ...props }: ICarouselPreview) => {
  return <div className={cn('flex flex-col gap-24 max-md:gap-10', className)}>{children}</div>;
};

interface ICarouselAnimation extends ICarouselIndicator {
  noButtons?: boolean;
  onNext?: () => void;
  onPrev?: () => void;
  children: ReactNode;
  noIndicator?: boolean;
  classname?: string;
}

export const CarouselAnimation = ({ onNext, onPrev, children, ...props }: ICarouselAnimation) => {
  return (
    <>
      <div
        className={cn(
          'relative flex aspect-[700/474] w-full overflow-hidden rounded-2xl md:h-[29.625rem]',
          props.classname,
        )}
      >
        {children}
      </div>
      {!props.noIndicator ||
        (!props.noButtons && (
          <div className="flex justify-end">
            {!props.noIndicator && (
              <CarouselIndicator
                data={props.data}
                dataIndex={props.dataIndex}
                setIndex={props.setIndex}
              />
            )}
            {!props.noButtons && (
              <div className="flex gap-4">
                <CarouselButton
                  onClick={onNext}
                  className="flex justify-center items-center bg-red rounded-full w-10 h-10"
                >
                  <LeftArrow />
                </CarouselButton>
                <CarouselButton
                  onClick={onPrev}
                  className="flex justify-center items-center bg-red rounded-full w-10 h-10"
                >
                  <RightArrow />
                </CarouselButton>
              </div>
            )}
          </div>
        ))}
    </>
  );
};

interface ICarouselButton extends ICarousel {
  onClick?: () => void;
}

export const CarouselButton = ({ onClick, ...props }: ICarouselButton) => {
  return (
    <button onClick={onClick} className={cn('cursor-pointer', props.className)}>
      {props.children}
    </button>
  );
};

interface ICarouselIndicator {
  data: {}[];
  dataIndex: number;
  setIndex: (index: number) => void;
}

export const CarouselIndicator = ({ data, dataIndex, setIndex }: ICarouselIndicator) => {
  return (
    <div className="flex justify-center items-center gap-3 w-full">
      {data.map((_, index) => {
        return (
          <div
            className={cn(
              'cursor-pointer transition-all',
              dataIndex === index
                ? 'h-5 w-5 rounded-full bg-red'
                : 'h-3 w-3 rounded-full bg-black-w2',
            )}
            onClick={() => setIndex(index)}
            key={uuidv4()}
          />
        );
      })}
    </div>
  );
};

