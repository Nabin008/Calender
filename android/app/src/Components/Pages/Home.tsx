import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  Dimensions, // Import Dimensions from 'react-native'
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function Home() {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const handleFilterPress = () => {
    setShowFilterModal(true);
  };

  const handleAddPress = () => {
    setShowAddModal(true);
  };

  const handleBellPress = () => {
    console.warn('Bell icon pressed');
  };

  const handleCloseFilterModal = () => {
    setShowFilterModal(false);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  // For Date
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date: {toDateString: () => any}) => {
    hideDatePicker();
    // Format date to show day and date
    const formattedDate = date.toDateString();
    if (selectedStartDate === null) {
      setSelectedStartDate(formattedDate);
    } else {
      setSelectedEndDate(formattedDate);
    }
  };

  // For Time
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time: any) => {
    console.warn('A time has been picked: ', time);
    hideTimePicker();
  };

  // Calculate the modal height to be 80% of the screen height
  const {height: screenHeight} = Dimensions.get('window');
  const filterModalHeight = screenHeight * 0.2; // Set the height for the filter modal
  const addModalHeight = screenHeight * 0.8;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headingContainer}>
        <TouchableOpacity
          onPress={handleFilterPress}
          style={styles.iconContainer}>
          <Image
            source={require('../Images/filter.png')}
            style={styles.filterLogo}
          />
        </TouchableOpacity>
        <Text style={styles.headingText}>Home</Text>
        <TouchableOpacity
          onPress={handleBellPress}
          style={styles.iconContainer}>
          <Image
            source={require('../Images/bellnotification.png')}
            style={styles.bellLogo}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.marginLine} />

      <View style={styles.bodySection}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddPress}>
          <Text style={styles.addButtonIcon}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Filter Modal */}
      <Modal visible={showFilterModal} animationType="slide" transparent={true}>
        <View style={styles.addModalBackground}>
          <View style={[styles.addModalContainer, {height: filterModalHeight}]}>
            <TouchableOpacity
              style={styles.modalContent}
              activeOpacity={1}
              onPress={() => {}}>
              <View style={styles.filterApplyWrapper}>
                <Text style={styles.filterText}>Filter</Text>
                <TouchableOpacity onPress={handleCloseFilterModal}>
                  <Text style={styles.applyText}>Apply</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.modalMarginLine} />
              <View style={styles.dateWrapper}>
                <View style={styles.dateColumn}>
                  <Text>Start Date</Text>
                  <TouchableOpacity onPress={showDatePicker}>
                    <Text style={styles.outputBox}>{selectedStartDate}</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.separator}>-----</Text>
                <View style={styles.dateColumn}>
                  <Text>End Date</Text>
                  <TouchableOpacity onPress={showDatePicker}>
                    <Text style={styles.outputBox}>{selectedEndDate}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker}
              />
              <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleTimeConfirm}
                onCancel={hideTimePicker}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Add Modal */}
      <Modal visible={showAddModal} animationType="slide" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={[styles.modalContainer, {height: addModalHeight}]}>
            <TouchableOpacity
              style={styles.modalContent}
              activeOpacity={1}
              onPress={() => {}}>
              {/* Add Modal Content */}
              <TextInput
                style={styles.titleInputField}
                placeholder="Add TITLE"
                placeholderTextColor="pink"
              />
              <Text style={styles.modalTitle}>Add Note</Text>
              <TextInput
                style={[styles.noteInputField, {height: 120}]}
                multiline={true}
                placeholder="Type your notes here"
                placeholderTextColor="#999"
              />
              <TouchableOpacity onPress={handleCloseAddModal}>
                <Text style={styles.closeButton}>Close</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headingContainer: {
    flexDirection: 'row',
    marginTop: moderateScale(20),
    width: '100%',
    height: moderateScale(50),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),
    position: 'relative',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterLogo: {
    height: moderateScale(20),
    width: moderateScale(20),
    marginRight: moderateScale(5),
  },
  bellLogo: {
    height: moderateScale(25),
    width: moderateScale(20),
    marginLeft: moderateScale(5),
  },
  headingText: {
    fontWeight: 'bold',
    fontSize: moderateScale(18),
  },
  marginLine: {
    alignSelf: 'center',
    backgroundColor: 'black',
    height: moderateScale(0.5),
    width: '97%',
    marginTop: moderateScale(10),
  },
  addButton: {
    bottom: moderateScale(5),
    right: moderateScale(15),
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '320%',
    marginLeft: 325,
  },
  addButtonIcon: {
    fontSize: moderateScale(25),
    fontWeight: 'bold',
    color: 'white',
  },
  bodySection: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    paddingVertical: 7,
    paddingHorizontal: 5,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '80%',
    height: '20%',
  },
  modalContent: {
    flex: 1,
    width: '100%',
  },
  filterApplyWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  filterText: {
    fontSize: moderateScale(15),
    marginBottom: moderateScale(10),
    alignSelf: 'center',
  },
  applyText: {
    fontSize: moderateScale(15),
    marginBottom: moderateScale(10),
    color: 'blue',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  modalMarginLine: {
    alignSelf: 'center',
    backgroundColor: 'black',
    height: moderateScale(0.5),
    width: '100%',
    marginTop: moderateScale(10),
  },
  dateWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(10),
  },
  dateColumn: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  outputBox: {
    borderWidth: 1,
    borderRadius: 25,
    padding: moderateScale(5),
    borderColor: 'black',
  },
  separator: {
    fontSize: moderateScale(20),
    paddingTop: moderateScale(10),
    paddingHorizontal: moderateScale(10),
  },

  addModalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addModalContainer: {
    backgroundColor: 'white',
    paddingVertical: 7,
    paddingHorizontal: 5,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '80%',
    height: '80%',
  },
  titleInputField: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(20),
    marginBottom: moderateScale(20),
  },
  noteInputField: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(20),
    marginBottom: moderateScale(20),
    height: moderateScale(120),
  },
  closeButton: {
    fontSize: moderateScale(18),
    color: 'red',
    fontWeight: 'bold',
    marginTop: moderateScale(20),
  },
  modalTitle: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    marginBottom: moderateScale(20),
  },
});
