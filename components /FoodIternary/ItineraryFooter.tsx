import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

const ItineraryFooter = () => {
  const router = useRouter();

  return (
    <View style={styles.footer}>
      <View style={styles.nav}>
        <Pressable style={styles.item} onPress={() => router.push('/profile')}>
          <Image
            source={{ uri: 'https://media-hosting.imagekit.io/34ea904fd6db422b/prof.PNG?Expires=1841830885&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=d7O9QgLn5eTRkHLfpcURJQ5MrupEqNRBosJ50t35jMFxSPrN0tuBWL2rj28yhvifE1IALWdiKZo4TF0teA34fuYGnnUl9v7kFblaYTwnr3JDllg6GpACKc~vr~HUaPKMix9Zrz1oM9FiT4Fg3W7mILle2sA9FEBI8EsM7NL1x1U89Bn5RYOUy4o~ZweZhgoydk~ykzFLCDF8PH4TNbDtff6~GASls3EHa~UVY33wXcqeffDBFCg6PSRgXzX~vfQZg6asTkVzGP3~IQacVsKodbFkmGIVBC1j4d8d0CRo8v5DIRmWi-CLm0Vsgi4-t5fSG4~oqyfgVDaBO2BK1cizqA__' }}
            style={styles.icon}
          />
          <Text style={styles.label}>Profile</Text>
        </Pressable>

        <Pressable style={styles.item} onPress={() => router.push('/fooditernary')}>
          <Image
            source={{ uri: 'https://media-hosting.imagekit.io/625eadde0a02460c/homei.PNG?Expires=1841830885&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=RjiiTWnX~-MvGw0U0ZZOVSnoLSJFmRNWXLhKg3yLB~dAGVai2OsAexsusgHfCZYvHMlcFHwYqHHlmjNiZJI-pYPTArGHb5vLs-rY7dfQ4RPzbM1HyyDZHQ7dXMqX2sO-C4qNm8weNWw0AXceQ7UGwM8wWuJaGqGK7WjOxnSonaooNeknPQyQmmr8lj-ygxtP6SQ2Y68FvaUTbjSaf-~VNrpwU~Vm4LsLzaqj3jP0DT3zY3uYGJTmYQj3AoS0Pc4EpSKAk8UsagRHl~BkPCsdIQg~ehQjJyyULdWEnO9fOXmSjNIrPcH7HrEDz6DLTQ~x~VC35Ph1WGE-nV~zUHoG6A__' }}
            style={styles.icon}
          />
          <Text style={styles.label}>Home</Text>
        </Pressable>

        <Pressable style={styles.item} onPress={() => router.push('/tripprep')}>
          <Image
            source={{ uri: 'https://media-hosting.imagekit.io/70eae57701564c41/trip.PNG?Expires=1841830885&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=RZwaJCll-F7sWeN1o92bWBgbTCs~hLykgJvQHZ2JS-S~oVotv94kG4EGdAVn0r4BY-1snISHPHw2BdApdxrHHt41YgeP~cfDW5XH21hGEBBiFXlPBj0AWx4MobVvX42lol7duhws8fdxBZdWmfJVBfpHnMxwJAB4Hi7ocnqftG0f1E57YCyLbdrxGdDyZMoITVHK1-xiS05GreBpvRmh0J9NAa~u1p5MmssjkJ7A~xn0u-IcEC9qWv~Oueu1ptNWGe5FFkWCgnrprseZ2MuO91ATYyqqLFuK-qtzFeUIj2PFgquxavi7q0phL6cyfUTbq01o225hclLHw2uq0m~ryw__' }}
            style={styles.icon}
          />
          <Text style={styles.label}>Trip prep</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#FBE6DC',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 24,
    marginTop: 20,
    alignItems: 'center',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  item: {
    alignItems: 'center',
    width: 60,
  },
  icon: {
    width: 26,
    height: 26,
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#71717a',
  },
});

export default ItineraryFooter;
