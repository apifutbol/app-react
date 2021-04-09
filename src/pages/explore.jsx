import React, { useState } from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  Link,
  List,
  ListItem,
  SkeletonBlock,
} from 'framework7-react';

export default () => {
  const [loading, setLoading] = useState(false);

  const ptr = (done) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      done();
    }, 1000);
  };

  return (
    <Page name="explore" pageContent={true} ptr ptrMousewheel={true} onPtrRefresh={ptr}>
      {/* Top Navbar */}
      <Navbar sliding={false}>
        <NavLeft>
          <Link panelOpen="left" iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" />
        </NavLeft>
        <NavTitle sliding>Explore</NavTitle>
      </Navbar>
      {/* Page Content */}
      {loading ? (
        <List mediaList v-if="loading">
          {[1, 2, 3].map((n) => (
            <ListItem
              key={n}
              className="skeleton-text skeleton-effect-fade"
              title="Full Name"
              subtitle="Position"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit. Aliquam vestibulum vitae lorem ac iaculis. Praesent nec pharetra massa, at blandit lectus. Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
            >
              <SkeletonBlock
                style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                slot="media"
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <List mediaList>
          <ListItem
            title="John Doe"
            subtitle="CEO"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit. Aliquam vestibulum vitae lorem ac iaculis. Praesent nec pharetra massa, at blandit lectus. Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
          >
            <img
              src="https://placeimg.com/80/80/people/1"
              style={{ width: '40px', height: '40px', borderRadius: '50%' }}
              slot="media"
            />
          </ListItem>
          <ListItem
            title="Jane Doe"
            subtitle="Marketing"
            text="Cras consequat felis at consequat hendrerit. Aliquam vestibulum vitae lorem ac iaculis. Praesent nec pharetra massa, at blandit lectus. Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
          >
            <img
              src="https://placeimg.com/80/80/people/2"
              style={{ width: '40px', height: '40px', borderRadius: '50%' }}
              slot="media"
            />
          </ListItem>
          <ListItem
            title="Kate Johnson"
            subtitle="Admin"
            text="Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
          >
            <img
              src="https://placeimg.com/80/80/people/3"
              style={{ width: '40px', height: '40px', borderRadius: '50%' }}
              slot="media"
            />
          </ListItem>
        </List>
      )}
    </Page>
  );
};
