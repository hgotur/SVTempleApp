import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

import globalStyles from '../styles/globalStyle';
import LabelledText from '../components/UI/LabelledText';
import BulletItem from '../components/UI/BulletItem';
import CollapsibleGroup from '../components/UI/CollapsibleGroup';

const AboutPage = () => {
    return (
        <ScrollView style={globalStyles.body}>
            <View style={globalStyles.textContainer}>
                <CollapsibleGroup
                    header="Sri Venkataswara Temple & Cultural Center"
                    headerStyle={globalStyles.title}
                    collapsed={false}>
                    <View style={globalStyles.textGroup}>
                        <Text style={globalStyles.subHeader}>Vision</Text>
                        <Text style={globalStyles.text}>
                            To maintain a traditional Sri Venkateswara temple and develop a
                            develop a develop a cultural center to serve as spiritual
                            and cultural anchor for Hindu community.
                </Text>
                    </View>
                    <View style={globalStyles.textGroup}>
                        <Text style={globalStyles.subHeader}>Mission</Text>
                        <BulletItem textStyle={globalStyles.text}>{`Provide a facility for all, regardless of ethnicity and background, to understand and promote virtues and spiritual growth amongst all based on Hindu scriptures`}</BulletItem>
                        <BulletItem textStyle={globalStyles.text}>{`Provide a learning center to teach, practice and display Indian arts and heritage`}</BulletItem>
                        <BulletItem textStyle={globalStyles.text}>{`To preserve our culture while assimilating into the adopted land`}</BulletItem>
                        <BulletItem textStyle={globalStyles.text}>{`Build a multi-purpose auditorium for celebrations and compliment with culinary facilities`}</BulletItem>
                        <BulletItem textStyle={globalStyles.text}>{`Raise an endowment large enough to sustain SVTCC for generations`}</BulletItem>
                        <BulletItem textStyle={globalStyles.text}>{`Collaborate with other voluntary organizations with similar guiding principles`}</BulletItem>
                    </View>

                    <View style={globalStyles.textGroup}>
                        <Text style={globalStyles.subHeader}>Guiding Principles</Text>
                        <BulletItem textStyle={globalStyles.text}>{`To understand Sanatana Dharma and the process of continuous spiritual progress`}</BulletItem>
                        <BulletItem textStyle={globalStyles.text}>{`To impart understanding of Indian culture and religious festivals, religious rituals and the rationale for participation`}</BulletItem>
                        <BulletItem textStyle={globalStyles.text}>{`To instill pride in Indian heritage amongst its youth`}</BulletItem>
                        <BulletItem textStyle={globalStyles.text}>{`To instill confidence within Indian community through a center representing its interest`}</BulletItem>
                        <BulletItem textStyle={globalStyles.text}>{`To support humanitarian and charitable causes like educational and socioeconomic development of the needy`}</BulletItem>
                        <BulletItem textStyle={globalStyles.text}>{`To increase societal awareness of Indian heritage and promote appreciation`}</BulletItem>
                        <BulletItem textStyle={globalStyles.text}>{`To promote inter-religious activities for better understanding of diverse faiths, cultures and ethnic heritages`}</BulletItem>
                        <BulletItem textStyle={globalStyles.text}>{`To offer mentoring, leadership development, and volunteerism to serve communities of Southeast Michigan`}</BulletItem>
                    </View>
                </CollapsibleGroup>


                <CollapsibleGroup
                    header="Board of Trustees"
                    headerStyle={globalStyles.title}>
                    <View style={globalStyles.textGroup}>
                        <Text style={globalStyles.subHeader}>Permanent Trustees</Text>
                        <Text style={globalStyles.text}>Anand Gangadhar</Text>
                        <Text style={globalStyles.text}>Anurag Bajaj</Text>
                        <Text style={globalStyles.text}>Brahmajee Nallamothu</Text>
                        <Text style={globalStyles.text}>Chalakudy Ramakrishna</Text>
                        <Text style={globalStyles.text}>Mahesh Chintalapati</Text>
                        <Text style={globalStyles.text}>Prasad Ravipati</Text>
                        <Text style={globalStyles.text}>Ravi Gullapalli</Text>
                        <Text style={globalStyles.text}>Reeta Setty</Text>
                        <Text style={globalStyles.text}>Saikumar Lingam</Text>
                        <Text style={globalStyles.text}>Srinivas Koneru</Text>
                        <Text style={globalStyles.text}>Vatsala Katragadda</Text>
                        <Text style={globalStyles.text}>Venkat Talasila</Text>
                    </View>

                    <View style={globalStyles.textGroup}>
                        <Text style={globalStyles.subHeader}>Elected Trustees</Text>
                        <Text style={globalStyles.text}>Anantha Vallabhaneni</Text>
                        <Text style={globalStyles.text}>Chalapathi Koduri</Text>
                        <Text style={globalStyles.text}>Jagdish Chaparala</Text>
                        <Text style={globalStyles.text}>Jogeswararao Peddiboyina</Text>
                        <Text style={globalStyles.text}>Narendra Suryadevara</Text>
                        <Text style={globalStyles.text}>Raghuram Matta</Text>
                        <Text style={globalStyles.text}>Rao Ravipati</Text>
                        <Text style={globalStyles.text}>Sahithi Atluru</Text>
                        <Text style={globalStyles.text}>Sunil Koneru</Text>
                        <Text style={globalStyles.text}>Vamsi Inapuri</Text>
                        <Text style={globalStyles.text}>Venkat Gotur</Text>
                        <Text style={globalStyles.text}>Venu Talluri</Text>
                        <Text style={globalStyles.text}>Vijay Chekuri</Text>
                    </View>

                    <View style={globalStyles.textGroup}>
                        <Text style={globalStyles.subHeader}>DTA</Text>
                        <Text style={globalStyles.text}>Dwaraka Prasad Boppana</Text>
                        <Text style={globalStyles.text}>Satyam Nerusu</Text>
                    </View>

                    <View style={globalStyles.textGroup}>
                        <Text style={globalStyles.subHeader}>TANA</Text>
                        <Text style={globalStyles.text}>Narahari Kodali</Text>
                    </View>
                </CollapsibleGroup>
                <CollapsibleGroup
                    header="Executive Committee"
                    headerStyle={globalStyles.title}>
                    <LabelledText
                        label="Chairman:"
                        labelWidth={150}
                        textStyle={globalStyles.text}>
                        Venkat Talasila
                </LabelledText>
                    <LabelledText
                        label="Vice-Chairman:"
                        labelWidth={150}
                        textStyle={globalStyles.text}>
                        Srinivas Koneru
                </LabelledText>
                    <LabelledText
                        label="Secretary:"
                        labelWidth={150}
                        textStyle={globalStyles.text}>
                        Narendra Suryadevara
                </LabelledText>
                    <LabelledText
                        label="Joint-Secretary:"
                        labelWidth={150}
                        textStyle={globalStyles.text}>
                        Vamsi Inapuri
                </LabelledText>
                    <LabelledText
                        label="Treasurer:"
                        labelWidth={150}
                        textStyle={globalStyles.text}>
                        Chalapathi Koduri
                </LabelledText>
                    <LabelledText
                        label="Joint-Treasurer:"
                        labelWidth={150}
                        textStyle={globalStyles.text}>
                        Jagadish Chaparala
                </LabelledText>
                    <LabelledText
                        label="Chairman Emeritus:"
                        labelWidth={150}
                        textStyle={globalStyles.text}>
                        Saikumar Lingam
                </LabelledText>
                    <LabelledText
                        label="Executive Officer:"
                        labelWidth={150}
                        textStyle={globalStyles.text}>
                        Shivaji Chirumamilla
                </LabelledText>
                </CollapsibleGroup>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    label: {
        width: 150,
    },
});

export default AboutPage;
