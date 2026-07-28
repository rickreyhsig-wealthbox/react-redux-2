import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  }

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>I accept</Button>
    </div>
  ) 

  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>
      Do you accept?
    </p>
  </Modal>

  return (
    <div className='relative'>

      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      { showModal && modal }

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultrices neque. Donec iaculis facilisis augue, in rutrum urna rutrum sit amet. Curabitur mollis nibh vel semper ornare. Etiam sollicitudin sollicitudin malesuada. Suspendisse eu ante sit amet magna blandit elementum vitae placerat libero. Praesent et mollis velit. Praesent ut auctor odio.

Nam auctor ultrices massa, vel pellentesque felis suscipit ut. Nam nec metus ultrices, facilisis metus eget, malesuada ante. Curabitur augue elit, molestie sed erat vel, luctus aliquet enim. Donec malesuada mi ac velit varius, at hendrerit dui pellentesque. Ut vel aliquam orci. Cras nec quam non arcu euismod euismod laoreet in dui. Curabitur dui lectus, aliquam ut felis et, aliquam maximus risus. Aliquam convallis massa vitae velit pulvinar, id viverra lorem ultrices. Etiam orci quam, viverra eleifend fringilla blandit, consequat non metus. Pellentesque ultricies ante ac ligula sagittis, rutrum feugiat ex tempor.
      </p>
          <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultrices neque. Donec iaculis facilisis augue, in rutrum urna rutrum sit amet. Curabitur mollis nibh vel semper ornare. Etiam sollicitudin sollicitudin malesuada. Suspendisse eu ante sit amet magna blandit elementum vitae placerat libero. Praesent et mollis velit. Praesent ut auctor odio.

Nam auctor ultrices massa, vel pellentesque felis suscipit ut. Nam nec metus ultrices, facilisis metus eget, malesuada ante. Curabitur augue elit, molestie sed erat vel, luctus aliquet enim. Donec malesuada mi ac velit varius, at hendrerit dui pellentesque. Ut vel aliquam orci. Cras nec quam non arcu euismod euismod laoreet in dui. Curabitur dui lectus, aliquam ut felis et, aliquam maximus risus. Aliquam convallis massa vitae velit pulvinar, id viverra lorem ultrices. Etiam orci quam, viverra eleifend fringilla blandit, consequat non metus. Pellentesque ultricies ante ac ligula sagittis, rutrum feugiat ex tempor.
      </p>
          <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultrices neque. Donec iaculis facilisis augue, in rutrum urna rutrum sit amet. Curabitur mollis nibh vel semper ornare. Etiam sollicitudin sollicitudin malesuada. Suspendisse eu ante sit amet magna blandit elementum vitae placerat libero. Praesent et mollis velit. Praesent ut auctor odio.

Nam auctor ultrices massa, vel pellentesque felis suscipit ut. Nam nec metus ultrices, facilisis metus eget, malesuada ante. Curabitur augue elit, molestie sed erat vel, luctus aliquet enim. Donec malesuada mi ac velit varius, at hendrerit dui pellentesque. Ut vel aliquam orci. Cras nec quam non arcu euismod euismod laoreet in dui. Curabitur dui lectus, aliquam ut felis et, aliquam maximus risus. Aliquam convallis massa vitae velit pulvinar, id viverra lorem ultrices. Etiam orci quam, viverra eleifend fringilla blandit, consequat non metus. Pellentesque ultricies ante ac ligula sagittis, rutrum feugiat ex tempor.
      </p>
          <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultrices neque. Donec iaculis facilisis augue, in rutrum urna rutrum sit amet. Curabitur mollis nibh vel semper ornare. Etiam sollicitudin sollicitudin malesuada. Suspendisse eu ante sit amet magna blandit elementum vitae placerat libero. Praesent et mollis velit. Praesent ut auctor odio.

Nam auctor ultrices massa, vel pellentesque felis suscipit ut. Nam nec metus ultrices, facilisis metus eget, malesuada ante. Curabitur augue elit, molestie sed erat vel, luctus aliquet enim. Donec malesuada mi ac velit varius, at hendrerit dui pellentesque. Ut vel aliquam orci. Cras nec quam non arcu euismod euismod laoreet in dui. Curabitur dui lectus, aliquam ut felis et, aliquam maximus risus. Aliquam convallis massa vitae velit pulvinar, id viverra lorem ultrices. Etiam orci quam, viverra eleifend fringilla blandit, consequat non metus. Pellentesque ultricies ante ac ligula sagittis, rutrum feugiat ex tempor.
      </p>
          <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultrices neque. Donec iaculis facilisis augue, in rutrum urna rutrum sit amet. Curabitur mollis nibh vel semper ornare. Etiam sollicitudin sollicitudin malesuada. Suspendisse eu ante sit amet magna blandit elementum vitae placerat libero. Praesent et mollis velit. Praesent ut auctor odio.

Nam auctor ultrices massa, vel pellentesque felis suscipit ut. Nam nec metus ultrices, facilisis metus eget, malesuada ante. Curabitur augue elit, molestie sed erat vel, luctus aliquet enim. Donec malesuada mi ac velit varius, at hendrerit dui pellentesque. Ut vel aliquam orci. Cras nec quam non arcu euismod euismod laoreet in dui. Curabitur dui lectus, aliquam ut felis et, aliquam maximus risus. Aliquam convallis massa vitae velit pulvinar, id viverra lorem ultrices. Etiam orci quam, viverra eleifend fringilla blandit, consequat non metus. Pellentesque ultricies ante ac ligula sagittis, rutrum feugiat ex tempor.
      </p>
          <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultrices neque. Donec iaculis facilisis augue, in rutrum urna rutrum sit amet. Curabitur mollis nibh vel semper ornare. Etiam sollicitudin sollicitudin malesuada. Suspendisse eu ante sit amet magna blandit elementum vitae placerat libero. Praesent et mollis velit. Praesent ut auctor odio.

Nam auctor ultrices massa, vel pellentesque felis suscipit ut. Nam nec metus ultrices, facilisis metus eget, malesuada ante. Curabitur augue elit, molestie sed erat vel, luctus aliquet enim. Donec malesuada mi ac velit varius, at hendrerit dui pellentesque. Ut vel aliquam orci. Cras nec quam non arcu euismod euismod laoreet in dui. Curabitur dui lectus, aliquam ut felis et, aliquam maximus risus. Aliquam convallis massa vitae velit pulvinar, id viverra lorem ultrices. Etiam orci quam, viverra eleifend fringilla blandit, consequat non metus. Pellentesque ultricies ante ac ligula sagittis, rutrum feugiat ex tempor.
      </p>
          <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultrices neque. Donec iaculis facilisis augue, in rutrum urna rutrum sit amet. Curabitur mollis nibh vel semper ornare. Etiam sollicitudin sollicitudin malesuada. Suspendisse eu ante sit amet magna blandit elementum vitae placerat libero. Praesent et mollis velit. Praesent ut auctor odio.

Nam auctor ultrices massa, vel pellentesque felis suscipit ut. Nam nec metus ultrices, facilisis metus eget, malesuada ante. Curabitur augue elit, molestie sed erat vel, luctus aliquet enim. Donec malesuada mi ac velit varius, at hendrerit dui pellentesque. Ut vel aliquam orci. Cras nec quam non arcu euismod euismod laoreet in dui. Curabitur dui lectus, aliquam ut felis et, aliquam maximus risus. Aliquam convallis massa vitae velit pulvinar, id viverra lorem ultrices. Etiam orci quam, viverra eleifend fringilla blandit, consequat non metus. Pellentesque ultricies ante ac ligula sagittis, rutrum feugiat ex tempor.
      </p>
          <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultrices neque. Donec iaculis facilisis augue, in rutrum urna rutrum sit amet. Curabitur mollis nibh vel semper ornare. Etiam sollicitudin sollicitudin malesuada. Suspendisse eu ante sit amet magna blandit elementum vitae placerat libero. Praesent et mollis velit. Praesent ut auctor odio.

Nam auctor ultrices massa, vel pellentesque felis suscipit ut. Nam nec metus ultrices, facilisis metus eget, malesuada ante. Curabitur augue elit, molestie sed erat vel, luctus aliquet enim. Donec malesuada mi ac velit varius, at hendrerit dui pellentesque. Ut vel aliquam orci. Cras nec quam non arcu euismod euismod laoreet in dui. Curabitur dui lectus, aliquam ut felis et, aliquam maximus risus. Aliquam convallis massa vitae velit pulvinar, id viverra lorem ultrices. Etiam orci quam, viverra eleifend fringilla blandit, consequat non metus. Pellentesque ultricies ante ac ligula sagittis, rutrum feugiat ex tempor.
      </p>
          <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultrices neque. Donec iaculis facilisis augue, in rutrum urna rutrum sit amet. Curabitur mollis nibh vel semper ornare. Etiam sollicitudin sollicitudin malesuada. Suspendisse eu ante sit amet magna blandit elementum vitae placerat libero. Praesent et mollis velit. Praesent ut auctor odio.

Nam auctor ultrices massa, vel pellentesque felis suscipit ut. Nam nec metus ultrices, facilisis metus eget, malesuada ante. Curabitur augue elit, molestie sed erat vel, luctus aliquet enim. Donec malesuada mi ac velit varius, at hendrerit dui pellentesque. Ut vel aliquam orci. Cras nec quam non arcu euismod euismod laoreet in dui. Curabitur dui lectus, aliquam ut felis et, aliquam maximus risus. Aliquam convallis massa vitae velit pulvinar, id viverra lorem ultrices. Etiam orci quam, viverra eleifend fringilla blandit, consequat non metus. Pellentesque ultricies ante ac ligula sagittis, rutrum feugiat ex tempor.
      </p>
          <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultrices neque. Donec iaculis facilisis augue, in rutrum urna rutrum sit amet. Curabitur mollis nibh vel semper ornare. Etiam sollicitudin sollicitudin malesuada. Suspendisse eu ante sit amet magna blandit elementum vitae placerat libero. Praesent et mollis velit. Praesent ut auctor odio.

Nam auctor ultrices massa, vel pellentesque felis suscipit ut. Nam nec metus ultrices, facilisis metus eget, malesuada ante. Curabitur augue elit, molestie sed erat vel, luctus aliquet enim. Donec malesuada mi ac velit varius, at hendrerit dui pellentesque. Ut vel aliquam orci. Cras nec quam non arcu euismod euismod laoreet in dui. Curabitur dui lectus, aliquam ut felis et, aliquam maximus risus. Aliquam convallis massa vitae velit pulvinar, id viverra lorem ultrices. Etiam orci quam, viverra eleifend fringilla blandit, consequat non metus. Pellentesque ultricies ante ac ligula sagittis, rutrum feugiat ex tempor.
      </p>

    </div>
  )
}

export default ModalPage;
