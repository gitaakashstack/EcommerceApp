import { FromObjectPipe } from './from-object.pipe';

describe('FromObjectPipe', () => {
  it('create an instance', () => {
    const pipe = new FromObjectPipe();
    expect(pipe).toBeTruthy();
  });
});
