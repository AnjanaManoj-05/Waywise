import React from "react";
import { Image, StyleSheet } from "react-native";

export const UserAvatar: React.FC = () => {
  return (
    <Image
      source={{
        uri: "https://media-hosting.imagekit.io/69661b800dac4aa2/imgearth.PNG?Expires=1841770165&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=EYlHygVuxTMJLrPcMHtJQM7EVysDLqWLleBfmP0Y4Ki~6h0OZMOBYbL8gM9qdOakjjEt4ziBJNJ3oK8ohU~-qq~1u7WOghgdo3v5pC-cS8HwvsfJu~SQCyzAawW7Ig1iJbHoCsoG3PvGGU4H4DMqiCva~VBAU7ZYoMiXVHPn1RlCs5byr0mtc371OUfA3aognwpoY2hDWtQo9hHWRBSAKhQ71V5ksVyjzQBLaTCiuaXXPm~F63iJk0tw~47LUyRiU62Hj8Uqcw-jR8wGGagcoDVWEgqY9LBGYr80KYciaIQejvEDrsLsZUsHTSRRNwY~iKvoAnJ0ecd~CU4sigcdYg__",
      }}
      style={styles.avatar}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 208, // w-52
    aspectRatio: 1,
    alignSelf: "center",
  },
});
