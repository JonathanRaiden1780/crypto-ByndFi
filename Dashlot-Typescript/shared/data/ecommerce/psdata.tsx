import { Fragment, useState } from "react";
import { Range, getTrackBackground } from "react-range";

export const Psoptions1 = [
  { value: '1', label: 'Latest' },
  { value: '2', label: 'Oldest' },
  { value: '3', label: 'Price:Low-to-High' },
  { value: '4', label: 'Price:Hight-to-Low' }

];

interface folder {
  id: number
  src: any
  name: string
  price: string
  classname: string
  cls2: string
  cls3: string

}
export const folders: folder[] = [
  { id: 1, src: "../../../../assets/images/media/ecommerce/7.jpg", name: "Simple Leather Wrist Watch for Women.", price: "$263.99", classname: "", cls2: "", cls3: "item-card9-icons1 wishlist active" },
  { id: 2, src: "../../../../assets/images/media/ecommerce/2.jpg", name: "Black Metal Watch for Men.", price: "$263.99", classname: "", cls2: "", cls3: "item-card9-icons1 wishlist active" },
  { id: 3, src: "../../../../assets/images/media/ecommerce/3.jpg", name: "Analog Fancy Style Wrist Watch.", price: "$149.00", classname: "", cls2: "", cls3: "item-card9-icons1 wishlist " },
  { id: 4, src: "../../../../assets/images/media/ecommerce/4.jpg", name: "Round-Dail Metal Watch for Men.", price: "", classname: "Los Angles", cls2: "fa fa-map-marker text-muted me-1", cls3: "item-card9-icons1 wishlist active" },
  { id: 5, src: "../../../../assets/images/media/ecommerce/5.jpg", name: "Modern Accessories Watch for Women.", price: "", classname: "Los Angles", cls2: "fa fa-map-marker text-muted me-1", cls3: "item-card9-icons1 wishlist " },
  { id: 6, src: "../../../../assets/images/media/ecommerce/6.jpg", name: "Stylish Gold Color Chain Watch With Analog.", price: "", classname: "Los Angles", cls2: "fa fa-map-marker text-muted me-1", cls3: "item-card9-icons1 wishlist " }

];

interface folder2 {
  id: number
  src: any
  namm: string
  acls: string

}
export const product2: folder2[] = [
  { id: 1, src: "../../../../assets/images/media/ecommerce/7.jpg", namm: "Black Chain Watch", acls: "item-card9-icons1 wishlist " },
  { id: 2, src: "../../../../assets/images/media/ecommerce/8.jpg", namm: "Modal Chain Watch", acls: "item-card9-icons1 wishlist active" },
  { id: 3, src: "../../../../assets/images/media/ecommerce/1.jpg", namm: "Digital Time Watch", acls: "item-card9-icons1 wishlist " },
  { id: 4, src: "../../../../assets/images/media/ecommerce/2.jpg", namm: "Leather Belt Watch", acls: "item-card9-icons1 wishlist active" },
  { id: 5, src: "../../../../assets/images/media/ecommerce/3.jpg", namm: "Modal Watches", acls: "item-card9-icons1 wishlist " },
  { id: 6, src: "../../../../assets/images/media/ecommerce/4.jpg", namm: "Exclusive Watche", acls: "item-card9-icons1 wishlist " }

];
interface LabeledTwoThumbsProps {
  rtl: boolean;
}

const LabeledTwoThumbs: React.FC<LabeledTwoThumbsProps> = ({ rtl }: any) => {
  const STEP = 0.1;
  const MIN = 0;
  const MAX = 100;

  const [values, setValues] = useState([20, 40]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={(newValues) => setValues(newValues)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              width: '100%',
            }}
          >
            <div
              className="rangeslider-thumb"
              ref={props.ref}
              style={{
                height: '5px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values,
                  colors: ['#ccc', '#4a77f0', '#ccc'],
                  min: MIN,
                  max: MAX,
                  rtl,
                }),
                alignSelf: 'center',
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props, isDragged }) => (
          <Fragment key={Math.random()}>
          <div
            {...props}
            key={index}
            style={{
              ...props.style,
              top: '16px',
              height: '24px',
              width: '24px',
              borderRadius: '4px',
              backgroundColor: '#FFF',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid #4a77f0',
              boxShadow: '0px 2px 6px rgb(170 170 170 / 30%)',
              // boxShadow: '0px 2px 6px #AAA',
            }}
          >
             <Fragment key={Math.random()}>
            <div
              style={{
                height: '26px',
                width: '36px',
                position: 'absolute',
                top: '-29px',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '14px',
                fontFamily: 'Arial, Helvetica Neue, Helvetica, sans-serif',
                padding: '4px',
                borderRadius: '4px',
                backgroundColor: '#4a77f0',
              }}
            >
              {values[index].toFixed(1)}
            </div>
            <div
              style={{
                height: '16px',
                width: '5px',
                backgroundColor: isDragged ? '#4a77f0' : '#CCC',
              }}
            />
            </Fragment>
          </div>
          </Fragment>
        )}
      />
    </div>
  );
};



export default LabeledTwoThumbs;
